import React from 'react';
import { withRouter } from 'react-router-dom';
import ReviewList from './ReviewList';
import { ReviewsForm } from './ReviewsForm';

import {
  createReview,
  deleteReview,
  updateReview,
  fetchReviews,
  stayDetails
} from '../services/api-helper'

class SingleStay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updating: false,
      reviewing: false,
      updatingreviewId: '',
      stayData: {
        id: "",
        name: "",
        location: "",
        description: "",
        url_to_image: ""
      },
      reviews: [],
      reviewFormData: {
        comment: "",
      },
      reviewUpdateFormData: {
        comment: "",
      }
    }
  }

  componentDidMount = async () => {
    const stayid = this.props.id;
    const stay = await stayDetails(stayid);
    const reviews = await fetchReviews(parseInt(stayid));
    this.setState({
      stayData: {
        id: stay.id,
        name: stay.name,
        location: stay.location,
        description: stay.description,
        url_to_image: stay.url_to_image
      },
      reviews: reviews
    })
  }

  /* to post new reviews  */
  handleAddReview = () => {
    this.setState(prevState => ({
      reviewing: !prevState.reviewing
    }))
  }

  handleReviewFormChange = (ev) => {
    const { name, value } = ev.target;
    this.setState(prevState => ({
      reviewFormData: {
        ...prevState.reviewFormData,
        [name]: value
      }
    }));
  };

  handleReviewFormSubmit = async (ev) => {
    ev.preventDefault();
    const data = { stayid: this.state.stayData.id, ...this.state.reviewFormData };
    const newReview = await createReview(this.state.stayData.id, data);
    this.setState(prevState => ({
      reviewUpdateFormData: {
        comment: '',
      },
      reviewing: false,
      reviews: [...prevState.reviews, newReview]
    }))
  }

  /* update/delete Reviews */
  handleReviewDelete = async (id) => {
    const resp = await deleteReview(id);
    this.setState(prevState => ({
      reviews: prevState.reviews.filter(review => review.id !== id)
    }))
  }

  handleReviewUpdate = (id) => {
    this.setState({
      updatingreviewId: id
    });
  }

  handleReviewUpdateChange = (ev) => {
    const { name, value } = ev.target;
    this.setState(prevState => ({
      reviewUpdateFormData: {
        ...prevState.reviewUpdateFormData,
        [name]: value
      }
    }));
  }

  handleReviewUpdateSubmit = async (ev) => {
    ev.preventDefault();
    const resp = await updateReview(this.state.reviewUpdateFormData, this.state.updatingreviewId);
    this.setState(prevState => ({
      reviews: prevState.reviews.map(review => review.id === resp.id ? resp : review),
      reviewUpdateFormData: {
        comment: "",
      },
      updatingreviewId: ''
    }))
  }

  handleReviewCancel = () => {
    this.setState({
      updatingreviewId: ''
    });
  }


  render() {
    return (
      <>
        <div className='singleStay'>
          <img className="hostelimage" src={this.state.stayData.url_to_image} alt=""></img>
        </div>
        <div className="singleStayInfo">

          <h2 className='stayh2'>{this.state.stayData.name}</h2>

          <p className='stayLocation'>Location:</p> <p className='stayResponse'>{this.state.stayData.location}</p>
          <p className='stayDescription'>Description:</p> <p className='stayResponse'>{this.state.stayData.description}</p>

        </div>

        <button className='leaveReviewButton' onClick={this.handleAddReview}>
          {!this.state.reviewing ? "Leave a review" : "Cancel"}
        </button>

        {this.state.reviewing &&
          <ReviewsForm
            handleChange={this.handleReviewFormChange}
            handleSubmit={this.handleReviewFormSubmit}
            reviewFormData={this.state.reviewFormData} />
        }

        <ReviewList
          reviews={this.state.reviews}
          updatingId={this.state.updatingreviewId}
          handleDelete={this.handleReviewDelete}
          handleUpdate={this.handleReviewUpdate}
          handleChange={this.handleReviewUpdateChange}
          handleSubmit={this.handleReviewUpdateSubmit}
          handleCancel={this.handleReviewCancel}
          editingId={this.state.updatingreviewId}
          reviewUpdateFormData={this.state.reviewUpdateFormData}

        />
      </>
    )
  }
}

export default withRouter(SingleStay);