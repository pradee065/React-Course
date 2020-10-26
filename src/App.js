import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    Person : [
      {
        name : "Max",
        age: 28
      },
      {
        name : "Mull",
        age: 29
      },
      {
        name : "Pradeep",
        age: 30
      }
    ]
  }

  switchHandlerName = () => {
    console.log('this handler');
    this.setState({
      Person : [
        {
          name : "Max",
          age: 29
        },
        {
          name : "Mull",
          age: 29
        },
        {
          name : "Pradeep",
          age: 35
        }

      ]
    });
  }

  render() {
    return (
      <div className="App">
       <h1>Kick starting my first react app</h1>
       <h2>Pradeep here</h2>
       <button onClick={this.switchHandlerName}>Switch Name</button>
       <Person name={this.state.Person[0].name} age={this.state.Person[0].age}/>
       <Person name={this.state.Person[1].name} age={this.state.Person[1].age}/>
       <Person name={this.state.Person[2].name} age={this.state.Person[2].age}/>
       <Person >Some thing unique here</Person>
      </div>
    );
  }
}

export default App;
