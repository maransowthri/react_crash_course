import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class AddTodo extends Component {
    state = {
        title: ''
    }

    changeTitle = (e) => this.setState({ [e.target.name] : e.target.value })
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' })
    }

    render(){
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input type='text' 
                       style={{ flex: '10', padding: '5px' }} 
                       name='title' 
                       placeholder='New task here...' 
                       value={this.state.title}
                       onChange={this.changeTitle}
                       />
                <input type='submit' style={{ flex: '1' }} className='btn' value='Add task' />
            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
}

export default AddTodo;