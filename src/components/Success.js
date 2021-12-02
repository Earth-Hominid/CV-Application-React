import React, { Component } from 'react';

export class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <div>
        <div className="card_header">
          <h2 className="welcome_header">
            Congratulations, You Finished! If you would like to print your
            resume, click below.
          </h2>
        </div>
        <div className="welcome_button_holder">
          <button className="welcome_button">Print My Resume</button>
        </div>
      </div>
    );
  }
}

export default Success;
