import React from 'react';

function Resume() {
  return (
    <div>
      <div className="resume_holder">
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
          <ul>
            <li>
              Worked to ensure a neat and attractive sales environment, and
              assisted in the setup of visual displays.
            </li>
            <li>
              Provided optimal assistance to the General Manager and handled a
              variety of tasks.
            </li>
          </ul>
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
    </div>
  );
}

export default Resume;
