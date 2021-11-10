import React from 'react';

function Header() {
  return (
    <div className="main_form_card">
      <form className="personal_form">
        <label for="fname" className="form_text">
          First Name
        </label>
        <input
          type="text"
          id="fname"
          name="fname"
          className="personal_input"
        ></input>
        <label for="lname" className="form_text">
          Last Name
        </label>
        <input
          className="personal_input"
          type="text"
          id="lname"
          name="lname"
        ></input>
        <label for="email" className="form_text">
          Email Address
        </label>
        <input type="email" className="personal_input"></input>
        <label className="form_text">Phone Number</label>
        <input className="personal_input"></input>
        <div className="button_holder">
          <input id="submit_button" type="submit" value="Submit"></input>
          <input id="reset_button" type="reset"></input>
        </div>
      </form>
    </div>
  );
}

export default Header;
