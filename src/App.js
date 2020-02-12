import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import uuid from 'uuid';
import Form from './Components/Form/Form';
import List from './Components/List/List';

export default class App extends Component {
  state = {
    tasks: [],
    id: "",
    content: "",
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

    this.setState({tasks: updatedTasks, content: ""})
  }

  handleDelete = id => {
    const updatedTasks = [...this.state.tasks].filter(task => task.id !== id);

    this.setState({tasks: updatedTasks})
  }

  handleEdit = id => {
    const updatedTasks = [...this.state.tasks].filter(task => task.id !== id);
    const selectedTask = this.state.tasks.find(task => task.id === id);

    this.setState({tasks: updatedTasks, content: selectedTask.content})
  }

  handleClearAll = () => {
    this.setState({tasks: []})
  }

  render(){
    return (
      <div className="container">
        <Form
        content={this.state.content}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        />
        <List
        tasks={this.state.tasks}
        onDelete={this.handleDelete}
        onEdit={this.handleEdit}
        onClear={this.handleClearAll}
        />
      </div>
    );
  }
}
