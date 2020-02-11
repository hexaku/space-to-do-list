import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import "./List.css";

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
    const id = copyTasks.length;
    const content = this.state.newTask;
    const task = {id, content}
    copyTasks.push(task);

    this.setState({tasks: copyTasks, newTask: ""});
  }

  handleDelete = id => {
    const copyTasks = [...this.state.tasks];
    const arrayId = copyTasks.findIndex((copyTask) => {
      return copyTask.id === id;
    })
    copyTasks.splice(arrayId, 1);
    
    this.setState({tasks: copyTasks});
  }

  render() {
    return (
      <Fragment>
        <div className="container">
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
              <div className="card mb-3 mt-3">
                <div className="card-body">
                  {task.content}          
                  <FontAwesomeIcon onClick={() => this.handleDelete(task.id)} icon={faTrash} color="#EA4335" />
                </div>
              </div>
            )
          })}
        </div>
      </Fragment>
    )
  }
}
