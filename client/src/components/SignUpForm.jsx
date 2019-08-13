import React from 'react';

// This component handles sign-up form
const SignUpForm = (props) => {
  console.log(props)
  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <hr />
      <form onSubmit={props.handleRegister} >
        <p>Username:</p>
        <input name="username" type="text" onChange={props.handleChange} />
        <p>Email:</p>
        <input name="email" type="text" onChange={props.handleChange} />
        <p>Password:</p>
        <input name="password" type="password" onChange={props.handleChange} />

        <button>Register</button>
      </form>
    </div>
  );
}

export default SignUpForm;