import React from 'react'

export const ReviewsForm = (props) => {
  return (
    <form className='commentForm'>
      <h1 className='reviewh1'>Let us know what you think </h1>
      <div className='reviewSubmit'>

        <input className="comment" name='comment' type="text" placeholder='Type here ...' value={props.reviewFormData.comment} onChange={props.handleChange}></input>
        <input className='inputSubmitReview' type="submit" placeholder="Submit" onClick={props.handleSubmit} />
      </div>
    </form>
  );
};