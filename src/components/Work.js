import React, { Component } from 'react';

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: '',
      sector: '',
      profession: '',
      start: '',
      end: '',
    };
  }

  handleCompanyChange = (event) => {
    this.setState({
      company: event.target.value,
    });
  };

  handleSectorChange = (event) => {
    this.setState({
      sector: event.target.value,
    });
  };

  handleProfessionChange = (event) => {
    this.setState({
      profession: event.target.value,
    });
  };

  handleStartChange = (event) => {
    this.setState({
      start: event.target.value,
    });
  };

  handleEndChange = (event) => {
    this.setState({
      end: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(
      `${this.state.company} ${this.state.profession} ${this.state.sector} ${this.state.start} ${this.state.end}`
    );
    event.preventDefault();
  };

  render() {
    const { company, sector, profession, start, end } = this.state;
    return (
      <div>
        <div className="main_form_card">
          <form className="experience_form" onSubmit={this.handleSubmit}>
            <label className="form_text">Company Name:</label>
            <input
              className="input"
              value={company}
              type="text"
              onChange={this.handleCompanyChange}
              id="company"
              name="company"
            ></input>
            <label className="form_text">Sector</label>
            <select
              id="sector"
              value={sector}
              onChange={this.handleSectorChange}
              name="sector"
              className="input"
            >
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
              <option value="Professional Services">
                Professional Services
              </option>
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
              value={profession}
              onChange={this.handleProfessionChange}
              id="profession"
              name="profession"
              className="input"
            >
              <option value="">Select</option>
              <option value="Academic / Researcher">
                Academic / Researcher
              </option>
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
              <option value="Press / Media Analyst">
                Press / Media Analyst
              </option>
              <option value="Sales / Marketing">Sales / Marketing</option>
              <option value="Solution or Systems Architect">
                Solutions or Systems Architect
              </option>
              <option value="Student">Student</option>
              <option value="System Administrator">System administrator</option>
              <option value="Venture Capitalist">Investor</option>
              <option value="Other">Other</option>
            </select>
            <label className="form_text">Start date:</label>
            <input
              className="input"
              value={start}
              onChange={this.handleStartChange}
              type="date"
              id="start"
              name="program-start"
              min="1950-01-01"
              max="2025-01-01"
            ></input>
            <label className="form_text">End date:</label>
            <input
              className="input"
              value={end}
              onChange={this.handleEndChange}
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
}

export default Work;
