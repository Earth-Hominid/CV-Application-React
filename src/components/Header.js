import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
    };
  }

  submitForm = (event) => {
    event.preventDefault();
    this.props.handlePersonalInfoProvided(this.state);
  };

  handleFirstNameChange = (event) => {
    this.setState({
      firstname: event.target.value,
    });
  };
  handleLastnameChange = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  };

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePhoneChange = (event) => {
    this.setState({
      phone: event.target.value,
    });
  };

  render() {
    const { firstname, lastname, email, phone } = this.state;
    return (
      <div className="main_form_card">
        <form className="personal_form" onSubmit={this.submitForm}>
          <label className="form_text">Name:</label>
          <input
            type="text"
            value={firstname}
            onChange={this.handleFirstNameChange}
            id="fname"
            name="firstname"
            className="input"
          ></input>
          <label className="form_text">Surname:</label>
          <input
            className="input"
            type="text"
            value={lastname}
            onChange={this.handleLastnameChange}
            id="lname"
            name="lname"
          ></input>
          <label className="form_text">Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleEmailChange}
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
            value={phone}
            onChange={this.handlePhoneChange}
          ></input>
          <div className="button_holder">
            <input id="submit_button" type="submit" value="Submit"></input>
            <input id="reset_button" type="reset"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Header;
