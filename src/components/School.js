import React, { Component } from 'react';

export class School extends Component {
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
        <div className="main_form_card">
          <form className="education_form">
            <label className="form_text"> Institution:</label>
            <input
              className="input"
              value={values.institution}
              onChange={handleChange('institution')}
            ></input>
            <label className="form_text">Program:</label>
            <input
              className="input"
              value={values.program}
              onChange={handleChange('program')}
            ></input>
            <label className="form_text">City:</label>
            <input
              value={values.educationCity}
              onChange={handleChange('educationCity')}
              className="input"
              type="text"
              id="educationCity"
              name="education-city"
            ></input>
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

export default School;
