import React, { Component } from 'react';
// import uniqid from 'uniqid';

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

  handleFirstnameChange = (event) => {
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

  handleSubmit = (event) => {
    alert(
      `${this.state.firstname} ${this.state.lastname} ${this.state.email} ${this.state.phone} `
    );
    event.preventDefault();
  };

  render() {
    const { firstname, lastname, email, phone } = this.state;
    return (
      <div className="main_form_card">
        <form className="personal_form" onSubmit={this.handleSubmit}>
          <label className="form_text">Name:</label>
          <input
            type="text"
            value={firstname}
            onChange={this.handleFirstnameChange}
            id="fname"
            name="fname"
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
