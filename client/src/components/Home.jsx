import React from 'react';
import { withRouter } from 'react-router-dom';

import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';


class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      active: 'FIRST',
      showhandleLogin: false,
      showhandleRegister: false,
    }
  }

  handleClick = (ev) => {
    let active = this.state.active;
    let newActive = active === 'FIRST' ? 'SECOND' : 'FIRST';
    this.setState({
      active: newActive
    });
  }
  showhandleRegister = () => {
    this.setState({
      showhandleRegister: true,
      showhandleLogin: false
    })
  };

  hidehandleRegister = () => {
    this.setState({
      showhandleRegister: false
    })
  };

  showhandleLogin = () => {
    this.setState(
      {
        showhandleLogin: true,
        showhandleRegister: false
      }
    )
  };

  hidehandleLogin = () => {
    this.setState(
      {
        showhandleLogin: false
      }
    )
  };

  render() {
    const loggedIn = localStorage.getItem('jwt');
    return (
      <div className="page home-page">
        <div className="home-hero">
          <h3>The Best Hostels of 2019</h3>
          <p>The results are in! Check-out our list of the top Hostels across the world and let us know your experience by leaving a comment.</p>
          <div>
            {(this.state.active === 'FIRST') && <LoginForm currentUser={this.props.currentUser}
              authFormData={this.props.authFormData}
              authHandleChange={this.props.authHandleChange}
              handleLogin={this.props.handleLogin}
              {...this.props}
            />}
            {(this.state.active === 'SECOND') && <SignUpForm
              {...this.props}
            />}
            {(this.state.active === 'FIRST') ?
              <button type="button" onClick={this.handleClick} className="toggle-button">
                Register
            </button> : <button type="button" onClick={this.handleClick} className="toggle-button">
                Login
            </button>}

            {loggedIn &&
              <button className="btn3" id="logout" onClick={this.props.handleLogout}> Log Out</button>
            }
          </div>

        </div>
      </div>
    )
  }
}
export default withRouter(Home)
