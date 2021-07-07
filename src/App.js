import React from 'react';
import Header from './components/TodoComponents/Header';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state = {
    todos: [
      {
        id: 1,
        title: 'Learn more about react',
        completed: false
      },

      {
        id: 2,
        title: 'Clean the dishes',
        completed: false
      },

      {
        id: 3,
        title: 'Take a shower',
        completed: false
      }
    ]
    
  }
// toggle complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }
// delete todo 
delTodo = (id) => {
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !==id)]})
}
 // add todo
 addTodo = (title) => {
  // console.log(title);
  const newTodo = {
    id: Date.now(),
    title,
    completed: false
  }
  this.setState({ todos: [...this.state.todos, newTodo]})
 }

  render() {
    return (
      <div className='app'>
        <div className='container'>

      <Header />
      <TodoForm addTodo={this.addTodo}/>
      <Todo todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>

        </div>
      </div>
    );
  }
}

export default App;
