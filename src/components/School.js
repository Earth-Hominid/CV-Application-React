import React from 'react';

function School() {
  return (
    <div>
      <h2>Education</h2>
      <form className="education_form">
        <label className="form_text">Educational Institution:</label>
        <input></input>
        <label className="form_text">Program:</label>
        <input></input>
        <label className="form_text" for="start">
          Start date:
        </label>
        <input
          type="date"
          id="start"
          name="program-start"
          min="1950-01-01"
          max="2025-01-01"
        ></input>
        <label className="form_text" for="start">
          End date:
        </label>
        <input
          type="date"
          id="end"
          name="program-end"
          min="1950-01-01"
          max="2025-01-01"
        ></input>
      </form>
    </div>
  );
}

export default School;
