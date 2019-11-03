import React, {Component} from 'react';

class ToDoItem extends Component {
    getStyle = () => {
        return {
            background: '#F4F4F4',
            padding: '10px',
            borderBottom: '1px #ccc dotted'/* ,
            textDecoration: this.props.todo.completed ? 'line-through' : 'none', */
        }
    }

    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    {title}
                    <button onClick={this.props.deleteToDo.bind(this, id)} style={{ float: 'right', border: 'none' }} >
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </p>
            </div>
        )
    }
}

export default ToDoItem;