import React, { Component, Fragment } from 'react'

export default class List extends Component {
  state = {
    tasks: [],
    newTask: "",
  }

  handleChange = event => {
    this.setState({newTask: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    const copyTasks = [...this.state.tasks];
    copyTasks.push(this.state.newTask);

    this.setState({tasks: copyTasks, newTask: ""});
  }

  render() {
    return (
      <Fragment>
        <h1>To do !</h1>
        <form onSubmit={this.handleSubmit}>
          <input 
          placeholder="Add a new task"
          value={this.state.newTask}
          onChange={this.handleChange}
          />
          <button type="submit">Add !</button>
        </form>
        {this.state.tasks.map((task) => {
          return(
            <div>
              <h4>{task}</h4>
            </div>
          )
        })}
      </Fragment>
    )
  }
}
