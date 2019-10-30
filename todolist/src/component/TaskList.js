import React, { Component } from 'react';
import TodoList from './TodoList';
import AddTask from './AddTask';

class TaskList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: ['Task 1', 'Task 2'],
            showAddForm: false
        }
        this.handleFilter = this.handleFilter.bind(this);
        this.filterText = '';
    }
    setStatus = () => {
        this.setState({
            showAddForm: true
        })
    }
    closeForm = () => {
        this.setState({
            showAddForm: false,
            showEditForm: false
        })
    }
    getTask = (name) => {
        console.log('TASK LIST: '+this.state.tasks);
        let temp = [];
        if(name == '') return this.state.tasks;
        this.state.tasks.filter(item => {
            console.log('name:' +this.props.filterText +'---item:'+item);
            if (item === this.props.filterText){
                temp.push(item);
            }
        })
        console.log('TASK LIST2: '+temp);
        return temp;
    }
    addTask = (name) => {
        this.state.tasks.push(name)
        this.forceUpdate()
    }
    handleFilter = (e) => {
        var newTaskList = this.getTask();
        console.log('New Task LIST2: '+newTaskList);
        this.setState({
            showAddForm: false,
            tasks: newTaskList
        })
    }
    render() {
        if (this.state.showAddForm === true) {
            return (
                <AddTask addTask={this.addTask} closeForm={this.closeForm} />
            )
        } else {
            return (
                <div className="container">
                    <br />
                    <br />
                    <button type="button" className="btn btn-outline-primary" onClick={this.setStatus} >Add Task</button>
                    <h2>List Task</h2>
                    <input value={this.props.filterText} onChange={this.handleFilter} className="filter" placeholder="Search a task..."></input>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name of task</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                //var renderData = this.state.filterTasks? this.state.filterTasks:this.state.tasks;
                                this.state.tasks.map(function (name, index) {
                                    return <TodoList name={name}/>
                                }.bind(this))
                            }
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}

export default TaskList;