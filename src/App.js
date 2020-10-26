import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Kick starting my first react app</h1>
       <h2>Pradeep here</h2>
       <Person />
      </div>
    );
  }
}

export default App;
