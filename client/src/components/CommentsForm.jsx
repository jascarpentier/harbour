import React from 'react'

export const CommentsForm = (props) => {
  return (
    <form>
      <h1 className='commenth1'>Please leave your review here </h1>
      <div className='commentSubmit'>
        <input name="message" type="text" placeholder="Type here ..." onChange={props.handleChange} />
        <input className='inputSubmitComment' type="submit" placeholder="Submit" onClick={props.handleSubmit} />
      </div>
    </form>
  );
};