import React from 'react';

function Header() {
  return (
    <div className="main_form_card">
      <form className="personal_form">
        <label for="fname" className="form_text">
          Name:
        </label>
        <input type="text" id="fname" name="fname" className="input"></input>
        <label for="lname" className="form_text">
          Surname:
        </label>
        <input className="input" type="text" id="lname" name="lname"></input>
        <label for="email" className="form_text">
          Email Address
        </label>
        <input type="email" className="input"></input>
        <label for="phone" className="form_text">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="input"
          placeholder="Country code + City code + Phone number"
          maxLength="255"
        ></input>
        <div className="button_holder">
          <input id="submit_button" type="submit" value="Submit"></input>
          <input id="reset_button" type="reset"></input>
        </div>
      </form>
    </div>
  );
}

export default Header;
