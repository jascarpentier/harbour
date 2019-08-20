import React from 'react';

// This component handles sign-up form
const SignUpForm = (props) => {
  return (
    <div className="auth-container">

      <form onSubmit={props.handleRegister} >

        <div className="con">

          <header className="head-form">

            <h2>Register</h2>
            <p>Register your account to leave a comment</p>

          </header>

          <input placeholder="@UserName" className="form-input" name="username" id="txt-input" type="text" onChange={props.authHandleChange} />
          <input placeholder="Email" className="form-input" name="email" id="txt-input" type="text" onChange={props.authHandleChange} />
          <input placeholder="Password" className="form-input" name="password" id="txt-input" type="password" onChange={props.authHandleChange} />

          <button>Register</button>
          <div className="other">
            <button className="btn submits frgt-pass">Forgot Password</button>
            <button className="btn submits sign-up">Sign Up
      <i class="fa fa-user-plus" aria-hidden="true"></i>
            </button>

          </div>
        </div>
      </form>

    </div>
  );
}

export default SignUpForm;