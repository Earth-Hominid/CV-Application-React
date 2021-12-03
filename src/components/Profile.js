import React, { Component } from 'react';

class Profile extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
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
              value={values.profile}
              onChange={handleChange('profile')}
            ></textarea>
            <div className="button_holder">
              <input
                id="continue_button"
                type="continue"
                value="Continue"
                onClick={this.continue}
              ></input>
              <input
                id="back_button"
                type="back"
                value="Back"
                onClick={this.back}
              ></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Profile;
