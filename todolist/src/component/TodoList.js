import React, {Component} from 'react';
import ToDoItem from './ToDoItem';
//import PropTypes from 'prop-types';

class ToDoList extends Component {
    render() {
        return this.props.toDoList.map((item) => (
            <ToDoItem key={item.id} todo={item} deleteToDo={this.props.deleteToDo} />
        ))
    }
}

export default ToDoList;