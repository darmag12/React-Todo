import React, { Component } from 'react'

 class TodoForm extends Component {
     state = {
         title: ''
     }
     onChange = (e) =>{
         this.setState({ title: e.target.value })
     }
    render() {
        return (
            <form className='form'>
                <input
             type='text'
             name='title'
             className='input-text'
             placeholder='Add Todo..'
             value={this.state.title}
             onChange={this.onChange}
             />
             <input 
             type='submit'
             value='Submit'
             className='submit-btn'
             />
            </form>
        )
    }
}

export default TodoForm
