import React from 'react';

export default function ReviewList(props) {
  return (
    <>
      {props.reviews.map(review =>
        <div className="review" key={review.id}>
          {}
          <h4> {review.comment} </h4>
          {props.editingId === '' &&
            <button className='deleteReview' onClick={() => props.handleDelete(review.id)}> Delete </button>}
          {props.editingId === '' &&
            <button className='updateReview' onClick={() => props.handleUpdate(review.id)}> Update </button>}
          {props.updatingId === review.id &&
            (<form>
              <input
                type="text"
                name="comment"
                onChange={props.handleChange}
                value={props.reviewUpdateFormData.comment}
                placeholder="comment" />
              {}
              <button className='finalizeSubmit' onClick={props.handleSubmit}> Finalize </button>
              <button className='cancelSubmit' onClick={props.handleCancel}> Cancel </button>
            </form>)}
        </div>)}
    </>
  )
}