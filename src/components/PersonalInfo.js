import React, { Component } from 'react';

export class PersonalInfo extends Component {
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
      <div className="main_form_card">
        <form className="personal_form">
          <label className="form_text">Name:</label>
          <input
            type="text"
            value={values.firstname}
            onChange={handleChange('firstname')}
            id="fname"
            name="firstname"
            className="input"
          ></input>
          <label className="form_text">Surname:</label>
          <input
            className="input"
            type="text"
            value={values.lastname}
            onChange={handleChange('lastname')}
            id="lname"
            name="lname"
          ></input>
          <label className="form_text">Email Address</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange('email')}
            className="input"
          ></input>
          <label className="form_text">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="input"
            placeholder="Country code + City code + Phone number"
            maxLength="255"
            value={values.phone}
            onChange={handleChange('phone')}
          ></input>
          <div className="button_holder">
            <input id="submit_button" type="continue" value="Continue"></input>
            <input id="back_button" type="back" value="Back"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default PersonalInfo;
