import React, { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Axios from 'axios';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';

import './App.css';

class App extends Component{
  state = {
    todos: []
  }

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then(res => this.setState({ todos: res.data }))
  }

  changeStatus = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  deleteItem = (id) => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) }))
  }

  addTodo = (title)=> {
    Axios.post("https://jsonplaceholder.typicode.com/todos", {
      title: title,
      completed: false
    }).then(res => this.setState({ todos: [...this.state.todos, res.data] }))
    
  }

  render(){
  return (
    <Router>
    <div className='App'>
          <div className='container'>
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={ this.addTodo } />
                <Todos todos={this.state.todos} deleteItem={ this.deleteItem } changeStatus={ this.changeStatus } />
              </React.Fragment>
            )} />
            <Route path="/about/" component={About} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;