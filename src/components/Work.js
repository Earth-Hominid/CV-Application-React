import React from 'react';

function Work() {
  return (
    <div>
      <div className="experience_header">
        <div className="headline_circle">
          <h2 className="experience_title">Professional Experience</h2>
        </div>
      </div>
      <div className="main_form_card">
        <form className="experience_form">
          <label className="form_text">Company Name:</label>
          <input className="experience_input"></input>
          <label className="form_text">Sector</label>
          <select id="sector" name="sector" className="experience_input">
            <option value="">Select</option>
            <option value="Aerospace">Aerospace</option>
            <option value="Agriculture">Farming</option>
            <option value="Automotive">Automobiles</option>
            <option value="Computers &amp; Electronics">
              Computers and Electronics
            </option>
            <option value="Consumer Goods">Consumer goods</option>
            <option value="Education">Education</option>
            <option value="Financial Services">Financial services</option>
            <option value="Gaming">Games</option>
            <option value="Government">Government</option>
            <option value="Healthcare">Health</option>
            <option value="Hospitality">Hospitality</option>
            <option value="Life Sciences">Biological Sciences</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Marketing &amp; Advertising">
              Marketing and Advertising
            </option>
            <option value="Media &amp; Entertainment">
              Media and Entertainment
            </option>
            <option value="Mining">Mining</option>
            <option value="Non-Profit Organization">
              Non profit organization
            </option>
            <option value="Oil &amp; Gas">Oil and Gas</option>
            <option value="Other">Other</option>
            <option value="Power &amp; Utilities">
              Energy and Public Utility Services
            </option>
            <option value="Professional Services">Professional Services</option>
            <option value="Real Estate &amp; Construction">
              Real Estate and Construction
            </option>
            <option value="Retail">Retail</option>
            <option value="Software &amp; Internet">
              Software and Internet
            </option>
            <option value="Telecommunications">Telecommunications</option>
            <option value="Transportation &amp; Logistics">
              Transportation and Logistics
            </option>
            <option value="Travel">Travel</option>
            <option value="Wholesale &amp; Distribution">
              Wholesale and Distribution
            </option>
          </select>
          <label className="form_text">Profession</label>
          <select
            id="profession"
            name="profession"
            className="experience_input"
          >
            <option value="">Select</option>
            <option value="Academic / Researcher">Academic / Researcher</option>
            <option value="Advisor / Consultant">Advisor / Consultant</option>
            <option value="Business Executive">Business Executive</option>
            <option value="Developer / Engineer">Developer / Engineer</option>
            <option value="Entrepreneur (Founder/Co-Founder)">
              Entrepreneur (Founder / Co-founder)
            </option>
            <option value="IT Executive">IT Executive</option>
            <option value="IT Professional or Technical Manager">
              IT Professional or Technical Manager
            </option>
            <option value="Press / Media Analyst">Press / Media Analyst</option>
            <option value="Sales / Marketing">Sales / Marketing</option>
            <option value="Solution or Systems Architect">
              Solutions or Systems Architect
            </option>
            <option value="Student">Student</option>
            <option value="System Administrator">System administrator</option>
            <option value="Venture Capitalist">Investor</option>
            <option value="Other">Other</option>
          </select>
          <label className="form_text" for="start">
            Start date:
          </label>
          <input
            className="experience_input"
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
            className="experience_input"
            type="date"
            id="end"
            name="program-end"
            min="1950-01-01"
            max="2025-01-01"
          ></input>
          <div className="button_holder">
            <input id="exp_submit_button" type="submit" value="Submit"></input>
            <input id="reset_button" type="reset"></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Work;
