import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    Person : [
      {
        id: 'aaaaa',
        name : "Max",
        age: 28
      },
      {
        id: 'bbbb',
        name : "Max2",
        age: 29
      },
      {
        id: 'cccc',
        name : "Max3",
        age: 30
      }
    ],
    otherState: "some other value",
    personState: false
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

  deletePerson = (personindex) => {
    //const persons = this.state.Person.slice();//to copy array and make new copy
    const persons = [...this.state.Person];//second way to copy array into new array
    console.log(persons);
    persons.splice(personindex, 1);
    console.log(persons);
    this.setState({
      Person : persons
    })

  }

  // Two way binding example
  namechangeHandler = (event, id) => {
  const personindex = this.state.Person.findIndex(p => {
    return p.id === id;
  });

  const person = {
    ...this.state.Person[personindex]
  }

  person.name = event.target.value;

  const Person = [...this.state.Person];
  Person[personindex] = person;

    this.setState({
      Person : Person
    });
  }

  togglePerson = () => {
    const personshow = this.state.personState;
    this.setState({
      personState: !personshow
    });
  }

  render() {

    const myStyle2 = {
      backgroundColor: 'white',
      border: '2px solid red',
      color: 'green'
    }

    let Personcomponent = null;
    if(this.state.personState){
      Personcomponent = (<div> 
     {
      this.state.Person.map((person, index) => {
        return <Person 
        click={() => this.deletePerson(index)}
        name={person.name} 
        age={person.age}
        key={person.id} 
        change={(event) => this.namechangeHandler(event, person.id)}
        />
      })
     } 
     </div>)
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
       onClick={this.togglePerson}>Toggle Person</button>
       {Personcomponent}
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
