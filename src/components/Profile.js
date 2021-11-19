import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: '',
    };
  }

  handleProfileChange = (event) => {
    this.setState({
      profile: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <div className="card_header">
          <h2 className="welcome_header">Professional Summary</h2>
        </div>
        <div className="p_center">
          <p>
            Write a professional statement describing your relevant experience,
            skills, and achievements. Tailor the statement to the companies
            needs if possible.
          </p>
        </div>
        <div className="main_form_card">
          <form className="education_form">
            <textarea
              type="text"
              id="professional_summary"
              name="profile"
              className="textarea_input"
              value={this.state.profile}
              onChange={this.handleProfileChange}
            ></textarea>
            <div className="button_holder">
              <input id="submit_button" type="submit" value="Submit"></input>
              <input id="reset_button" type="reset"></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Profile;
