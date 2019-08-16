import React from 'react';

/* login form and link to register form */

const Login = (props) => {

  return (
    <div className="auth-container">

      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleLogin();
      }} >
        <div class="con">
          <header class="head-form">
            <h2>Log In</h2>
            <p>login here using your username and password</p>
          </header>
          <input placeholder="Username" class="form-input" name="username" type="text" onChange={props.authHandleChange} value={props.authFormData.username} />
          <input placeholder="Password" class="form-input" name="password" type="password" onChange={props.authHandleChange} value={props.authFormData.password} />
          <button class="log-in">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
