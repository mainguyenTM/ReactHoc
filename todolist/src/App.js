//importing modules
import React, {Component} from 'react';
import axios from 'axios'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import uuid from 'react-uuid';

import './App.css';

//Component
import Header from './component/Header';
import AddToDo from './component/AddToDo';
import ToDoList from './component/ToDoList';
import About from './component/pages/About';
import FilterToDo from './component/FilterToDo';



class App extends Component {
  state = {
    toDoList: []
  }

  componentDidMount() {
    this.resetData();
  }

  resetData(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
          .then(res => this.setState({toDoList: res.data}));
  }

  //Toggle Complete
  markComplete = (id) => {
    this.setState({
      toDoList: this.state.toDoList.map(toDoItem => {
        if(toDoItem.id === id) {
          toDoItem.completed = !toDoItem.completed;
        }
        return toDoItem;
      })
    });
  }

  addToDo = (title) => {
    const newToDo = {
      userId: 1,
      //id: uuid(),
      title: title,
      completed: false
    }

    axios.post('https://jsonplaceholder.typicode.com/todos/', newToDo).then(res => {
      res.data.id = uuid();
      this.setState({
        toDoList: [...this.state.toDoList, res.data]
      })
    }
    )
  }
  
  filterToDo = (title) => {
    if(title){
        this.setState({
            toDoList: this.state.toDoList.filter(function(item){
                return item.title.toLowerCase().search(title) !== -1
            })
          })
    }else{
        this.resetData();
    }
    
  }

  deleteToDo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ toDoList: [...this.state.toDoList.filter(todo => todo.id !== id)]}));
  }

  render() {
    console.log(this.state.toDoList);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <br />
            <Route exact path="/" render={props => (
              <div>
                <AddToDo addToDo={this.addToDo} />
                <div className="mv-20">
                    <FilterToDo filterToDo={this.filterToDo} />
                </div>
                <div className="text-center mv-20">
                    <i>Action: comming soon</i>
                </div>
                <ToDoList toDoList={this.state.toDoList} deleteToDo={this.deleteToDo}/>
              </div>
            )} />

            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
