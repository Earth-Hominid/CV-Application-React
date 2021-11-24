import React, { Component } from 'react';
import Nav from './components/Nav';
import Welcome from './components/Welcome';
import Header from './components/Header';
import Profile from './components/Profile';
import School from './components/School';
import Work from './components/Work';
import './components/styles.css';
import Resume from './components/Resume';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      profile: '',
    };
  }

  getInputData = (inputValueEntered) => {
    this.setState({ ...inputValueEntered });
  };

  render() {
    const { firstname, lastname, email, phone, profile } = this.state;
    return (
      <div>
        <Nav />
        <Welcome />
        <Header handlePersonalInfoProvided={this.getInputData} />
        <Profile handleProfileProvided={this.getInputData} />
        <School />
        <Work />
        <Resume
          firstname={firstname}
          lastname={lastname}
          email={email}
          phone={phone}
          profile={profile}
        />
      </div>
    );
  }
}

export default App;
