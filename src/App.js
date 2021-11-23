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
    };
  }

  getInputData = (inputValueEntered) => {
    this.setState({ ...inputValueEntered });
  };

  render() {
    const { firstname } = this.state;
    return (
      <div>
        <Nav />
        <Welcome />
        <Header handlePersonalInfoProvided={this.getInputData} />
        <Profile />
        <School />
        <Work />
        <Resume firstname={firstname} />
      </div>
    );
  }
}

export default App;
