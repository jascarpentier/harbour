import React from 'react';

// This component handles sign-up form
const SignUpForm = (props) => {
  return (
    <div className="auth-container">

      <form onSubmit={props.handleRegister} >
        <div class="con">
          <header class="head-form">
            <h2>Register</h2>
            <p>Register your account to leave a comment</p>
          </header>
          <input placeholder="@UserName" class="form-input" name="username" id="txt-input" type="text" onChange={props.authHandleChange} />
          <input placeholder="Email" class="form-input" name="email" id="txt-input" type="text" onChange={props.authHandleChange} />
          <input placeholder="Password" class="form-input" name="password" id="txt-input" type="password" onChange={props.authHandleChange} />

          <button>Register</button>
          <div class="other">
            <button class="btn submits frgt-pass">Forgot Password</button>
            <button class="btn submits sign-up">Sign Up
      <i class="fa fa-user-plus" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </form>

    </div>
  );
}

export default SignUpForm;