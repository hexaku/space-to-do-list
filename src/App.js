import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import uuid from 'uuid';
import Form from './Components/Form/Form';
import List from './Components/List/List';

export default class App extends Component {
  state = {
    tasks: [],
    id: "",
    content: "ok",
    isEdited: false,
    selectedTask: {},
  }

  handleChange = event => {
    this.setState({content: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    const id = uuid();
    const content = this.state.content
    const newTask = {id, content}
    const updatedTasks = [...this.state.tasks, newTask];

    this.setState({tasks: updatedTasks})
  }

  render(){
    return (
      <div className="container">
        <Form
        content={this.state.content}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        />
        <List tasks={this.state.tasks}/>
      </div>
    );
  }
}
