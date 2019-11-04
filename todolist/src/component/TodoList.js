import React, {Component, Fragment} from 'react';
import ToDoItem from './ToDoItem';
//import PropTypes from 'prop-types';

class ToDoList extends Component {
    render() {
        return  <div>{this.props.toDoList.map(item =>
            <ToDoItem key={item.id} todo={item} deleteToDo={this.props.deleteToDo} />
        )} </div>
    }
}

export default ToDoList;