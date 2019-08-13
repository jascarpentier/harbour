import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import decode from 'jwt-decode';
import './App.css';
import {
  loginUser,
  registerUser
} from './services/api-helper'

import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import EnterPage from './components/EnterPage';
import SignUpForm from './components/SignUpForm';
import SinglePageView from './components/SinglePageView';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      authFormData: {
        username: "",
        email: "",
        password: ""
      }
    }
  }








  /* AUTH */

  handleLoginButton = () => {
    this.props.history.push("/login")
  }

  handleLogin = async () => {
    const userData = await loginUser(this.state.authFormData);
    this.setState({
      currentUser: decode(userData.token)
    })
    localStorage.setItem("jwt", userData.token)
  }

  handleRegister = async (e) => {
    e.preventDefault();
    await registerUser(this.state.authFormData);
    this.handleLogin();
  }

  handleLogout = () => {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    })
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  render() {
    return (
      <div className="app" id="home">

        <EnterPage id="enter" />
        <LoginForm id="login" handleLogin={this.handleLogin} />
        <SignUpForm id="signup" handleRegister={this.handleRegister} handleChange={this.authHandleChange} />
        <SinglePageView id="view_stay" />
        <Footer id="footer" />
      </div>

    );
  }
}
