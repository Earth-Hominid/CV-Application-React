import React, { Component } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import './components/styles.css';
import School from './components/School';
import Work from './components/Work';
import Welcome from './components/Welcome';
import Resume from './components/Resume';
import Profile from './components/Profile';

export class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Welcome />
        <Header />
        <Profile />
        <School />
        <Work />
        <Resume />
      </div>
    );
  }
}

export default App;
