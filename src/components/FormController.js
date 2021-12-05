import React, { Component } from 'react';
import Nav from './Nav';
import Welcome from './Welcome';
import PersonalInfo from './PersonalInfo';
import Profile from './Profile';
import School from './School';
import Work from './Work';
import './styles.css';
import Resume from './Resume';
import Success from './Success';

class FormController extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      profile: '',
      company: '',
      sector: '',
      profession: '',
      professionStartDate: '',
      professionEndDate: '',
      institution: '',
      program: '',
      educationStartDate: '',
      educationEndDate: '',
    };
  }

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  getInputData = (inputValueEntered) => {
    this.setState({ ...inputValueEntered });
  };

  render() {
    const { step } = this.state;
    const {
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
      educationCity,
    } = this.state;
    const values = {
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
      educationCity,
    };

    switch (step) {
      case 1:
        return (
          <>
            <Nav />
            <Welcome nextStep={this.nextStep} />
          </>
        );
      case 2:
        return (
          <>
            <Nav />
            <PersonalInfo
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );
      case 3:
        return (
          <>
            <Nav />
            <Profile
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );
      case 4:
        return (
          <>
            <Nav />
            <School
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );
      case 5:
        return (
          <>
            <Nav />
            <Work
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );
      case 6:
        return (
          <>
            <Nav />
            <Resume
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
            />
          </>
        );
      case 7:
        return (
          <>
            <Nav />
            <Success prevStep={this.prevStep} values={values} />
          </>
        );
      default:
        console.log('Resume Builder, built by Earth Hominid, 2021.');
    }
  }
}

export default FormController;
