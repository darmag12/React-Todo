import React, { Component } from 'react'

 class TodoForm extends Component {
     state = {
         title: ''
     }

     onSubmit = (e) => {
         e.preventDefault();
         if(this.state.title===''){
            return alert(`You have added an empty task dude, come on let's be productive here`);
        }
         this.props.addTodo(this.state.title);
         this.setState({title: ''});
     }
     onChange = (e) =>{
         this.setState({ title: e.target.value })
     }
    render() {
        return (
            <form onSubmit={this.onSubmit}className='form'>
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
