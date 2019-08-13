import React from 'react';
import { withRouter } from 'react-router-dom';
import CommentList from './CommentList';
import { CommentsForm } from './CommentsForm';
import {
  createComment,
  deleteComment,
  updateComment,
  fetchComments,
  stayInfo
} from '../services/api-helper'


class SinglePageView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updating: false,
      commenting: false,
      updatingcommentId: '',
      StayData: {
        id: "",
        name: "",
        location: "",
        description: "",
        url_to_image: ""
      },
      comments: [],
      commentFormData: {
        message: "",
      },
      commentUpdateFormData: {
        message: "",
      }
    }
  }

  componentDidMount = async () => {
    const Stayid = parseInt(this.props.match.params.id)
    const resp = await stayInfo(Stayid);
    const resp2 = await fetchComments(Stayid);
    const comments = resp.reviews;
    const data = resp.stay;
    this.setState({
      stayData: {
        ...data,
        id: Stayid
      },
      comments
    })
  }

  /* to post new comments  */
  handleAddComment = () => {
    this.setState(prevState => ({
      commenting: !prevState.commenting
    }))
  }

  handleCommentFormChange = (ev) => {
    const { name, value } = ev.target;
    this.setState(prevState => ({
      commentFormData: {
        ...prevState.commentFormData,
        [name]: value
      }
    }));
  };

  handleCommentFormSubmit = async (ev) => {
    ev.preventDefault();
    const data = { ...this.state.commentFormData, id: this.state.stayData.id };
    const newComment = await createComment(data);
    this.setState(prevState => ({
      commentUpdateFormData: {
        message: '',
      },
      commenting: false,
      comments: [...prevState.comments, newComment]
    }))
  }

  /* update/delete comments */
  handleCommentDelete = async (id) => {
    const resp = await deleteComment(id);
    this.setState(prevState => ({
      comments: prevState.comments.filter(comment => comment.id !== id)
    }))
  }

  handleCommentUpdate = (id) => {
    this.setState({
      updatingcommentId: id
    });
  }

  handleCommentUpdateChange = (ev) => {
    const { name, value } = ev.target;
    this.setState(prevState => ({
      commentUpdateFormData: {
        ...prevState.commentUpdateFormData,
        [name]: value
      }
    }));
  }

  handleCommentUpdateSubmit = async (ev) => {
    ev.preventDefault();
    const data = { ...this.state.commentUpdateFormData, id: this.state.updatingcommentId };
    const resp = await updateComment(data);
    console.log(resp);
    this.setState({
      commentUpdateFormData: {
        message: "",
        yaynay: ""
      },
      updatingcommentId: ''
    })
  }

  handleCommentCancel = () => {
    this.setState({
      updatingcommentId: ''
    });
  }


  render() {
    return (
      <>
        <div className='singleStay'>

        </div>
        <div className="singleStayInfo">
          <h2 className='stayh2'>{this.state.name}</h2>
          <p className='stayLocation'>Location:</p> <p className='stayResponse'>{this.state.location}</p>
          <p className='stayDescription'>Description:</p> <p className='stayResponse'>{this.state.description}</p>

        </div>

        <button className='leaveCommentButton' onClick={this.handleAddComment}>
          {!this.state.commenting ? "Leave a comment" : "Cancel commenting"}
        </button>

        {this.state.commenting &&
          <CommentsForm
            handleChange={this.handleCommentFormChange}
            handleSubmit={this.handleCommentFormSubmit} />
        }

        <CommentList
          comments={this.state.comments}
          updatingId={this.state.updatingcommentId}
          handleDelete={this.handleCommentDelete}
          handleUpdate={this.handleCommentUpdate}
          handleChange={this.handleCommentUpdateChange}
          handleSubmit={this.handleCommentUpdateSubmit}
          handleCancel={this.handleCommentCancel}
          editingId={this.state.updatingcommentId}
          commentUpdateFormData={this.state.commentUpdateFormData}

        />

      </>

    )
  }
}

export default withRouter(SinglePageView);