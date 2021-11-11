import React from 'react';

function School() {
  return (
    <div>
      <h2>Eductation</h2>
      <label>Eductational Institution:</label>
      <input></input>
      <label>Program:</label>
      <input></input>
      <label for="start">Start date:</label>
      <input
        type="date"
        id="start"
        name="program-start"
        min="1950-01-01"
        max="2025-01-01"
      ></input>
    </div>
  );
}

export default School;
