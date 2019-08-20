import React from 'react';

/* login form and link to register form */

const Login = (props) => {

  return (
    <div className="auth-container">

      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleLogin();
      }} >
        <div className="con">
          <header className="head-form">
            <h2>Log In</h2>
            <p>login here using your username and password</p>
          </header>
          <input placeholder="@Username" className="form-input" name="username" type="text" onChange={props.authHandleChange} value={props.authFormData.username} />
          <input placeholder="Password" className="form-input" name="password" type="password" onChange={props.authHandleChange} value={props.authFormData.password} />
          <button className="log-in">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
