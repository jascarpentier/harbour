import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  };

  logOut = (props) => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="header">
        <div id="header-logo">
          <Link to="/landing">
          </Link>
        </div>
        <div id="header-nav">
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/all-stays">All Stays</Link></li>
            <li><Link to="/my-profile">My Profile</Link></li>

          </ul>
        </div>
      </div >
    )
  }
}

export default withRouter(Header);