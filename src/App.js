import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import './components/styles.css';
import School from './components/School';
import Work from './components/Work';

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <School />
      <Work />
    </div>
  );
}

export default App;
