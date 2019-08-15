import React from 'react';
import { Route, Link } from 'react-router-dom';
// import { withRouter } from 'react-router';
import decode from 'jwt-decode';
import './App.css';
import {
  loginUser,
  registerUser
} from './services/api-helper'

import Footer from './components/Footer';
import Home from './components/Home';
import SingleStay from './components/SingleStay';
import AllStays from './components/AllStays';


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
      <div className="App" >
        <header>
          <nav>
            <Link className='NavLinks' to='/'>Home</Link>
            <Link className='NavLinks' to='stays'>All Stays</Link>
          </nav>

        </header>
        <main>

          <Route
            exact path='/stays'
            render={() => <AllStays
            />}
          />
          <Route
            exact path='/stays/:id'
            render={(props) => <SingleStay id={props.match.params.id}
            />}
          />
          <Route
            exact path='/'
            render={() => <Home
              handleRegister={this.handleRegister}
              handleLogin={this.handleLogin}
              currentUser={this.state.currentUser}
              authFormData={this.state.authFormData}
              authHandleChange={this.authHandleChange}
              handleLogout={this.handleLogout}
            />}
          />
          <div>
            <Footer id="footer" />
          </div>
        </main>
      </div >

    );
  }
}
