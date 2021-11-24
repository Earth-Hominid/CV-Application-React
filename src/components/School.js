import React, { Component } from 'react';

export class School extends Component {
  constructor(props) {
    super(props);

    this.state = {
      institution: '',
      program: '',
      educationStartDate: '',
      educationEndDate: '',
    };
  }

  submitForm = (event) => {
    event.preventDefault();
    this.props.handleEducationInfoProvided(this.state);
  };

  handleInstitutionChange = (event) => {
    this.setState({
      institution: event.target.value,
    });
  };

  handleProgramChange = (event) => {
    this.setState({
      program: event.target.value,
    });
  };

  handleStartChange = (event) => {
    this.setState({
      educationStartDate: event.target.value,
    });
  };

  handleEndChange = (event) => {
    this.setState({
      educationEndDate: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(
      `${this.state.institution} ${this.state.program} ${this.state.start} ${this.state.end}`
    );
    event.preventDefault();
  };

  render() {
    const { institution, program, educationStartDate, educationEndDate } =
      this.state;
    return (
      <div>
        <div className="main_form_card">
          <form className="education_form" onSubmit={this.submitForm}>
            <label className="form_text"> Institution:</label>
            <input
              className="input"
              value={institution}
              onChange={this.handleInstitutionChange}
            ></input>
            <label className="form_text">Program:</label>
            <input
              className="input"
              value={program}
              onChange={this.handleProgramChange}
            ></input>
            <label className="form_text">Start date:</label>
            <input
              value={educationStartDate}
              onChange={this.handleStartChange}
              className="input"
              type="date"
              id="start"
              name="program-start"
              min="1950-01-01"
              max="2025-01-01"
            ></input>
            <label className="form_text">End date:</label>
            <input
              className="input"
              value={educationEndDate}
              onChange={this.handleEndChange}
              type="date"
              id="end"
              name="program-end"
              min="1950-01-01"
              max="2025-01-01"
            ></input>
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

export default School;
