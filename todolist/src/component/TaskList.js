import React, { Component } from 'react';
import TodoList from './TodoList';
import AddTask from './AddTask';

class TaskList extends Component {
    constructor(props) {
        super(props)
        const originData = ['Task 1', 'Task 2'];
        this.state = {
            tasks: originData,
            taskWithFilter: originData,
            showAddForm: false
        }
        this.handleFilter = this.handleFilter.bind(this);
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
    addTask = (name) => {
        this.setState({ 
            tasks: [...this.state.tasks, name],
            taskWithFilter: [...this.state.tasks, name]
        });
        //this.state.tasks.push(name)
        this.forceUpdate()
    }
    handleFilter = (e) => {
        var updatedList = this.state.tasks;
        var filterText = e.target.value.toLowerCase();
        console.log('updatedList: '+updatedList);
        updatedList = updatedList.filter((item =>{
            return item.toLowerCase().search(filterText) !== -1;
        }) );
        console.log('updatedList2: '+updatedList);
        this.setState({ 
            taskWithFilter: updatedList,
        });
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
                    <input onChange={this.handleFilter} className="filter" placeholder="Search a task..."></input>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name of task</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                //var renderData = this.state.filterTasks? this.state.filterTasks:this.state.tasks;
                                this.state.taskWithFilter.map(function (name, index) {
                                    return <TodoList key={index} name={name}/>
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