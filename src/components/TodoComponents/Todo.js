import React from 'react';
import TodoList from './TodoList';
// import PropTypes from 'prop-types';
class Todo extends React.Component {

  render() {
    return( 
      this.props.todos.map((todo)=> 
        <TodoList key={todo.id} propTodo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
    ))
    
  }
}
//Prop Types
// Todo.PropTypes = {
//     todos: PropTypes.array.isRequired
// }

export default Todo
