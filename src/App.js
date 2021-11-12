import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import './components/styles.css';
import School from './components/School';
import Work from './components/Work';
import Welcome from './components/Welcome';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Nav />
      <Welcome />
      <Header />
      <School />
      <Work />
      <Resume />
    </div>
  );
}

export default App;
