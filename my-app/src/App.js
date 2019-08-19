import React , {Component} from 'react';
import {BrowserRouter  as Router, Route} from 'react-router-dom'
import axios from 'axios';
import './App.css';
import Todos from './Components/Todos';

import Header from './Components/layout/Header';
import AddTodo from './Components/AddTodo';
// import uuid  from 'uuid';
import About from './Components/pages/About';

class App extends Component {
  state = {
    todos : [ ]
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos: res.data}))
  }


  //Toggle Complete
  markComplete = (id) =>{
    this.setState({todos : this.state.todos.map((todo) => {
         if(todo.id === id){
           todo.comppleted = !todo.comppleted
         }
         return todo
    })
  })
  }


//Delete Todo
delTodo = (id) =>{
 this.setState({todos : [...this.state.todos.filter(todo => todo.id !== id)]})
}


// Add Todo 
addTodo = (title) => {
  axios.post('https://jsonplaceholder.typicode.com/todos?_limit=10',{
    title, comppleted: false
  })
  .then(res => this.setState({todos : [...this.state.todos, res.data]}))
}
  render(){

  
  return (
    <Router>   
     <div className="App">
    <div className="container">
    <Header/>
    <Route  exact path="/" render={props => (
    <React.Fragment>
   
   
    <AddTodo addTodo = { this.addTodo } />
    
    
    
    <Todos todos = {this.state.todos} 
           markComplete = {this.markComplete} 
           delTodo = {this.delTodo}/>

      
      
      
      </React.Fragment>
    )}/>

    <Route path ="/about" component={About}/>
    </div>
    </div>
    </Router>

  );
  }
}

export default App;
