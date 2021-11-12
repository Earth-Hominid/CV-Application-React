import React from 'react';

function Welcome() {
  return (
    <div>
      <div className="card_header">
        <h2 className="welcome_header">
          Welcome to Resume Builder. We're glad you made it! Click the button
          below and let's begin!
        </h2>
      </div>
      <div className="welcome_button_holder">
        <button className="welcome_button">Build My Resume</button>
      </div>
    </div>
  );
}

export default Welcome;
