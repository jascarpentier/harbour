import React from 'react'

export const ReviewsForm = (props) => {
  return (
    <form>
      <h1 className='reviewh1'>Please leave your review here </h1>
      <div className='reviewSubmit'>
        <input name="comment" type="text" placeholder="Type here ..." onChange={props.handleChange} />
        <input className='inputSubmitReview' type="submit" placeholder="Submit" onClick={props.handleSubmit} />
      </div>
    </form>
  );
};