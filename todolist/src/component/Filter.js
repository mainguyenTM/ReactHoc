import React, { Component } from 'react';
import TodoList from './TodoList';
import AddTask from './AddTask';

class FilterTab extends Component {
    constructor(props) {
        super(props)
        this.filterText = '';
        this.taskWithFilter = this.props.originData;
        //this.handleFilter = this.props.handleFilter.bind(this);
        //this.closeForm = this.props.closeForm.bind(this);
    }
    
    linkList = () => {
        this.props.closeForm()
    }
    componentDidMount() {
        var updatedList = this.props.state.originData;
        //var filterText = e.target.value.toLowerCase();
        console.log('updatedList: '+updatedList);
        updatedList = updatedList.filter((item =>{
            return item.toLowerCase().search(filterText) !== -1;
        }) );
        console.log('updatedList2: '+updatedList);
        this.setState({ 
            taskWithFilter: updatedList,
        });
    }
    componentWillUnmount() {
        //todo
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
                    <button type="button" className="btn btn-default" onClick={this.linkList}>Cancel</button>
                    <h2>List Task With Filter</h2>
                    <input onChange={this.handleFilter} className="filter" placeholder="Search a task..."></input>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name of task</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
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

export default FilterTab;