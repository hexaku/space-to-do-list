import React, { Component, Fragment } from 'react'
import uuid from 'uuid';

export default class Form extends Component {
  state = {
    id: "",
    task: "",
  }

  handleChange = event => {
    console.log(this.props);
    this.setState({task: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    const newTask = {id: uuid(), task: this.state.task}
    const updatedTasks = [...this.props.tasks, newTask];

    this.props.onAdd(updatedTasks);

    this.setState({task: "", id: ""})
  }
  render() {
    return (
      <Fragment>
        <h2>Enter your task</h2>
        <form onSubmit={this.handleSubmit}>
          <input 
            placeholder="Add a task !"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button>Add !</button>
        </form>
      </Fragment>
    )
  }
}
