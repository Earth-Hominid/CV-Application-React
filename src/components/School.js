import React from 'react';

function School() {
  return (
    <div>
      <div className="main_form_card">
        <form className="education_form">
          <label className="form_text"> Institution:</label>
          <input className="input"></input>
          <label className="form_text">Program:</label>
          <input className="input"></input>
          <label className="form_text">Start date:</label>
          <input
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

export default School;
