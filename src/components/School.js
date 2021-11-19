import React, { Component } from 'react';

export class School extends Component {
  constructor(props) {
    super(props);

    this.state = {
      institution: '',
      program: '',
      start: '',
      end: '',
    };
  }

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
      start: event.target.value,
    });
  };

  handleEndChange = (event) => {
    this.setState({
      end: event.target.value,
    });
  };

  handleSubmit = (event) => {};

  render() {
    const { institution, program, start, end } = this.state;
    return (
      <div>
        <div className="main_form_card">
          <form className="education_form" onSubmit={this.handleSubmit}>
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
              value={start}
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
              value={end}
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
