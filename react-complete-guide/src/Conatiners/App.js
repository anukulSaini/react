import React, { Component } from 'react';
import classes from './App.css';
// import Radium,{StyleRoot} from 'radium';
// import styled from 'styled-components';
import Person from '../Components/Personss/Person/Person';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';


// const Styledbutton = styled.button`
// background-color:${anukul => anukul.saini? 'red' :'green'};
// color:white;
// font:inherit;     //it was used when we used style-component
// border:1px solid blue;
// padding:8px;
// cursor:pointerl;
// &:hover {
//   color:black;
//   background-color:${anukul => anukul.saini? 'salmon' :'lightgreen'};
// }
// `;


class App extends Component {

  state= {
    persons :[
     {id:'aa', name:'anukul', age:'10'},
     {id:'bb', name:'divyansh', age:'20'},
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

nameChangeHandler = (event, id) => {

const personIndex = this.state.persons.findIndex(p =>{
       return p.id===id
});

const person1 ={
  ...this.state.persons[personIndex]
}

person1.name=event.target.value;

const persons2 = [...this.state.persons]
persons2[personIndex] = person1;

this.setState({persons:persons2});    
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

  //    const style = {
  //       // backgroundColor:'green',   without styled componenet and we have to use radium to use hover property......
  //        color:'white',
  //        font:'inherit',
  //       border:'1px solid blue',
  //        padding:'8px',
  //        cursor:'pointer',
  //         ':hover':{
  //          color:'black',
  //          backgroundColor:'lightgreen'
  //       }
   // }

  

          let persons = null;
          let btnClass = [classes.Button];
          if(this .state.showPerson){
            persons=(
              <div>
                 {this.state.persons.map((person,index) =>{
                  return <ErrorBoundry key={person.id}><Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age} 
                  changed={(event) => this.nameChangeHandler(event,person.id)}
                  /></ErrorBoundry>
                })} 
              </div>
            );

              btnClass.push(classes.Red);

          //   style.backgroundColor='red';
          //   style[':hover']={//using radium
          //     backgroundColor:'salmon',
          //     color:'black'
          //   }
           }

             const AsignedClasses = [];
if (this.state.persons.length<=2)
{
  AsignedClasses.push(classes.red);
}
if (this.state.persons.length<=1)
{
  AsignedClasses.push(classes.bold);
}



    return (
     
          <div className={classes.App}>
            <h1>.............</h1>
            <p className={AsignedClasses.join(' ')}>This is really working</p>
            <button className={btnClass.join(' ')}  onClick={this.tooglePersonHandler}>Toogle Person</button>
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
