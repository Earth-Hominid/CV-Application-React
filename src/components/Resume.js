import React from 'react';

function Resume() {
  return (
    <div>
      <h2>Christain Feist</h2>
      <h4>998-999-9999, email@email.com</h4>
      <div className="line_break"></div>
      <div className="profile">
        <h2>PROFILE</h2>
        <p>
          Proficient in various platforms, languages, and embedded systems.
          Experienced Software Developer adept in bringing forth expertise in
          design, installation, testing and maintenance of software systems.
        </p>
      </div>
      <div className="line_break"></div>
      <div className="employment_history">
        <h2>EMPLOYMENT HISTORY</h2>
      </div>
      <div>
        <h3>Start Date - End Date</h3>
        <h3>Job Title, Employer</h3>
        <h4>City</h4>
        <ul></ul>
      </div>
      <div className="line_break"></div>
      <div className="education_history">
        <h2>EDUCATION</h2>
      </div>
      <div>
        <h3>Start Date - End Date</h3>
        <h3>Degree, School</h3>
        <h4>City</h4>
        <ul></ul>
      </div>
    </div>
  );
}

export default Resume;
