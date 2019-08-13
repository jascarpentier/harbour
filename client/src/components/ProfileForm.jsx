import React from 'react';

export default class ProfileForm extends React.Component {
  constructor(props) {
    super(props)
  }

  /* update your profile form */

  render() {
    return (
      <div className='profile-form'>

        <h3>Update your profile</h3>

        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.props.handleProfileChange}
            id="name" />
          <br />

          <label htmlFor="hometown">Where I grew up:</label>
          <input
            type="text"
            name="hometown"
            placeholder='Hometown'
            onChange={this.props.handleProfileChange}
            id="hometown" />
          <br />

          <label htmlFor="languages">Languages I am fluent in:</label>
          <input
            type="text"
            name="languages"
            placeholder='languages I am fluent in ... '
            onChange={this.props.handleProfileChange}
            id="languages" />
          <br />

          <label htmlFor="aboutMe">About me:</label>
          <input
            type="text"
            name="aboutMe"
            placeholder='About me ... '
            onChange={this.props.handleProfileChange}
            id="aboutMe" />
          <br />

          <label htmlFor="languageLearn">Language I want to learn:</label>
          <select className='languageLearn'
            onChange={this.props.handleProfileChange}
            name="languageLearn"
          >
            <option
              value="start">Please select one</option>
            <option
              value="Spanish">Spanish</option>
            <option
              value="French">French</option>
            <option
              value="Italien">Italien</option>
            <option
              value="Arabic">Arabic</option>
            <option
              value="Russian">Russian</option>
            <option
              value="Thai">Thai</option>
            <option
              value="Hindi">Hindi</option>
            <option
              value="Bengali">Bengali</option>
          </select>
          <br />
          <div className='languageButton'>
            <button onClick={this.props.handleProfileSubmit} className='update-profile'>Update Profile</button>
          </div>
        </form>
      </div >
    )
  }
}