import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    Person : [
      {
        name : "Max",
        age: 28
      },
      {
        name : "Max2",
        age: 29
      },
      {
        name : "Max3",
        age: 30
      }
    ],
    otherState: "some other value",
    Userinput: [
      {
        username: 'Pradeep'
      },
      {
        username: 'Pavan'
      }
    ]
  }

  switchHandlerName = (newName) => {
    console.log('this handler');
    this.setState({
      Person : [
        {
          name : newName,
          age: 29
        },
        {
          name : "Max12",
          age: 29
        },
        {
          name : "Max13",
          age: 35
        }

      ]
    });
  }

  // Two way binding example
  namechangeHandler = (event) => {
    this.setState({
      Person : [
        {
          name : "Max20",
          age: 29
        },
        {
          name : event.target.value,
          age: 29
        },
        {
          name : "Max22",
          age: 40
        }

      ]
    });
  }

  // Add input username to paragraph text

  inputHandler = () => {
    this.setState({
      Userinput: [
        {
          username: 'ANup'
        },
        {
          username: 'Chandan'
        }
      ]
    });
  }
  // Add userinput to paragraph
  inputchangeHandler = (event) => {
    this.setState({
      Userinput: [
        {
          username: event.target.value
        },
        {
          username: 'Chandan'
        }
      ]
    });
  }

  render() {

    const myStyle2 = {
      backgroundColor: 'white',
      border: '2px solid red',
      color: 'green'
    }

    return (
      <div className="App">
       <h1>Kick starting my first react app</h1>
       <h2>Pradeep here</h2>
       {/* <button onClick={() => this.switchHandlerName('Pradeep B G!!!!!')}>Switch Name</button> */}
       {/* 2nd way of passing value to function.
       (compared to below this is inefficient) */}
       <button 
       style={myStyle2}
       onClick={this.switchHandlerName.bind(this, 'Pradeep B G!')}>Switch Name</button>
       {/* 1 way to pass value to function */}
       <Person 
       name={this.state.Person[0].name} 
       age={this.state.Person[0].age}/>
       <Person 
       name={this.state.Person[1].name} 
       age={this.state.Person[1].age}
       change= {this.namechangeHandler}
       />
       <Person 
       name={this.state.Person[2].name} 
       age={this.state.Person[2].age}
       click={this.switchHandlerName.bind(this, 'Max11!!')}
       >Your a great citizen!!</Person>
       <span>Some thing unique here</span>

       <Userinput 
       changed={this.inputchangeHandler}
       currentValue={this.state.Userinput[0].username}></Userinput>
       <Useroutput></Useroutput>

       <Useroutput 
       username = {this.state.Userinput[0].username}
       click = {this.inputHandler}
       >
       asdadasdasdada
       </Useroutput>
      </div>


       
    );
  }
}

export default App;

// const app = (props) => {
//   const [ personState, setPersonState ] = useState({
//       Person : [
//         {
//           name : "Max",
//           age: 28
//         },
//         {
//           name : "Mull",
//           age: 29
//         },
//         {
//           name : "Pradeep",
//           age: 30
//         }
//       ]
//  // otherState: "some other value"
// });

// const [otherState, otherSetUpdate] = useState('some other update');

// console.log(personState, otherState );

//   const switchHandlerName = () => {
//     setPersonState(
//       {
//         Person : [
//           {
//             name : "Max",
//             age: 29
//           },
//           {
//             name : "Mull",
//             age: 29
//           },
//           {
//             name : "Pradeep",
//             age: 35
//           }
  
//         ]
//        // otherState: "some other value"
//       }
//       );
//     }

//   return (
//     <div className="App">
//      <h1>Kick starting my first react app</h1>
//      <h2>Pradeep here</h2>
//      <button onClick={switchHandlerName}>Switch Name</button>
//      <Person name={personState.Person[0].name} age={personState.Person[0].age}/>
//      <Person name={personState.Person[1].name} age={personState.Person[1].age}/>
//      <Person name={personState.Person[2].name} age={personState.Person[2].age}/>
//      <Person >Some thing unique here</Person>
//     </div>
//   )
// }
