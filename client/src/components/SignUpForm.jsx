import React from 'react';

// This component handles sign-up form
const SignUpForm = (props) => {
  return (
    <div className="auth-container">
      <h2>Sign Up</h2>

      <form onSubmit={props.handleRegister} >
        <p>Username:</p>
        <input name="username" type="text" onChange={props.authHandleChange} />
        <p>Email:</p>
        <input name="email" type="text" onChange={props.authHandleChange} />
        <p>Password:</p>
        <input name="password" type="password" onChange={props.authHandleChange} />

        <button>Register</button>
      </form>
    </div>
  );
}

export default SignUpForm;