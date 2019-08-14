import React from 'react';
import { withRouter } from 'react-router-dom';

import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';


class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      active: 'FIRST',
    }
  }

  handleClick = (ev) => {
    let active = this.state.active;
    let newActive = active === 'FIRST' ? 'SECOND' : 'FIRST';
    this.setState({
      active: newActive
    });
  }
  render() {
    return (
      <div className="page home-page">
        <div className="home-hero">

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
              <button type="button" onClick={this.handleClick} className="toggle-button smooth">
                Register
            </button> : <button type="button" onClick={this.handleClick} className="toggle-button smooth">
                Login
            </button>
            }
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Home)
