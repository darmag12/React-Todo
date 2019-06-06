// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './Todo.css';


 class TodoList extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px black dotted',
            textDecoration: this.props.propTodo.completed ?
            'line-through' : 'none'
        }
    }


    render() {
        return (
            <div style={this.getStyle()}>
                <p>
                <input type='checkbox' onChange={this.props.markComplete.bind(this, this.props.propTodo.id)}/> {this.props.propTodo.title}
                <button onClick={this.props.delTodo.bind(this, this.props.propTodo.id)} className='btn-style'>x</button>
                </p>
            </div>
        )
    }
}

//Prop Types
// TodoList.PropTypes = {
//     propTodo:
//     PropTypes.object.isRequired
// }

// we use two pairs of curly braces if we want to set an in line style but if we have a variable we will only require one pair on the div style= above
// const itemStyle = {
//     backgroundColor: '#f4f4f4' 
// }

export default TodoList

