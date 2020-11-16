import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


export class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => (
            <TodoItem key={ todo.id } todo={ todo } deleteItem={this.props.deleteItem} changeStatus={ this.props.changeStatus } />
        )) 
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    changeStatus: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
}

export default Todos;

