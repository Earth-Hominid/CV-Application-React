import React, { Component } from 'react';

class Resume extends Component {
  continue = (e) => {
    e.preventDefault();
    // Process form
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
        firstname,
        lastname,
        email,
        phone,
        profile,
        company,
        sector,
        profession,
        professionStartDate,
        professionEndDate,
        institution,
        program,
        educationStartDate,
        educationEndDate,
      },
    } = this.props;
    return (
      <div>
        <div className="resume_holder">
          <h2>
            {firstname} {lastname}
          </h2>
          <h4>
            {phone}, {email}
          </h4>
          <div className="line_break"></div>
          <div className="profile">
            <h2>PROFILE</h2>
            <p>{profile}</p>
          </div>
          <div className="line_break"></div>
          <div className="employment_history">
            <h2>EMPLOYMENT HISTORY</h2>
          </div>
          <div>
            <h3>
              {professionStartDate} - {professionEndDate}
            </h3>
            <h3>
              {profession}, {company}
            </h3>
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
            <h3>
              {educationStartDate} - {educationEndDate}
            </h3>
            <h3>
              {program}, {institution}
            </h3>
            <ul></ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
