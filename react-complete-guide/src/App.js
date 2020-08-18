import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state= {
    persons :[
     {id:'aa', name:'anukul', age:'20'},
     {id:'bb', name:'divyansh', age:'25'},
     {id:'cc', name:'sarthak', age:'30'}
    ],
    showPerson: false
}

nameSwitchHandler = (newName) => {
   this.setState( {
     persons:[
      {name:newName, age:'20'},
      {name:'shahzad', age:'30'},
      {name:'sarthak', age:'40'}
     ]
   }
 )
}

nameChangeHandler = (event) => {
  this.setState( {
    persons:[
     {name:'Anukul', age:'20'},
     {name:event.target.value, age:'30'},
     {name:'sarthak', age:'40'}
    ]
  }
)
}

tooglePersonHandler = () =>{
  const doesShow =this.state.showPerson;
  this.setState({showPerson: !doesShow});
}

deletePersonHandler = (personIndex)=>{
      //const persons = this.state.persons.slice;//1. we have use slice bcz editing original data is not a good practice so slice make a copy of it.
      //2. another aproach rather than slce
      const persons =[...this.state.persons];//3. this is preferable
      persons.splice(personIndex,1);
      this.setState({persons:persons});
}

  render() {

          let persons = null;
          if(this .state.showPerson){
            persons=(
              <div>
                 {this.state.persons.map((person,index) =>{
                  return <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  />
                })} 
              </div>
            )
          }

    return (
          <div className="App">
            <h1>.............</h1>
            <button onClick={this.tooglePersonHandler}>Toogle Person</button>
                  {/* <Person 
              //        name={this.state.persons[0].name} 
              //        age={this.state.persons[0].age}></Person>
              //      <Person 
              //         name={this.state.persons[1].name} 
              //         age={this.state.persons[1].age} 
              //         click ={this.nameSwitchHandler.bind(this,'Not')}
              //         changed={this.nameChangeHandler}></Person>
              //       <Person 
              //          name={this.state.persons[2].name} 
              //          age={this.state.persons[2].age}>.........</Person> */}
              {persons}   
           </div>
    );
  }
}

export default App;
