import React from 'react';
import { Link } from 'react-router-dom';


/* login form and link to register form */

const Login = (props) => {

  return (
    <div className="auth-container">
      <h2>login</h2>

      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleLogin();
      }} >
        <p>Username:</p>
        <input name="username" type="text" onChange={props.handleChange} />
        <p>Password:</p>
        <input name="password" type="password" onChange={props.handleChange} />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
