import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
  state = {
    newTask: "",
    editTask: false,
  }

  handleChange = event => {
    this.setState({newTask: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    const id = this.props.tasksLength;
    const content = this.state.newTask;

    if(this.props.selectedTask){
      this.setState({newTask: this.props.selectedTask, editTask: true});
    }else{
      this.props.onAdd({id, content});
      this.setState({newTask: "", editTask: false});
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.editTask 
        ? 
        <input 
        placeholder="Edit a task"
        value={this.state.newTask}
        onChange={this.handleChange}
        required
        />
        :
        <input 
        placeholder="Add a new task"
        value={this.state.newTask}
        onChange={this.handleChange}
        required
        />
        }
        {this.state.editTask 
        ? 
        <button type="submit">Edit !</button>
        :
        <button type="submit">Add !</button>
        }
      </form>
    )
  }
}
