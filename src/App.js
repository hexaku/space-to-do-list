import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from './Components/Form/Form';
import List from './Components/List/List';

export default class App extends Component {
  state = {
    tasks: [],
    isEdited: false,
  }

  handleAdd = updatedTasks => {
    this.setState({tasks: updatedTasks})
  }

  render(){
    return (
      <div className="container">
        <Form tasks={this.state.tasks} onAdd={this.handleAdd}/>
        <List tasks={this.state.tasks}/>
      </div>
    );
  }
}
