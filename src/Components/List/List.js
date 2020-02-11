import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import "./List.css";

export default class List extends Component {
  state = {
    tasks: [],
    newTask: "",
    editTask: false,
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

    this.setState({tasks: copyTasks, newTask: "", editTask: false});
  }

  handleEdit = id => {
    const copyTasks = [...this.state.tasks];
    const arrayIndex = copyTasks.findIndex((copyTask) => {
      return copyTask.id === id;
    })

    copyTasks.splice(arrayIndex, 1);

    const selectedTask = this.state.tasks.find(task => task.id === id);

    this.setState({tasks: copyTasks, newTask: selectedTask.content, editTask: true});
  }

  handleDelete = id => {
    const copyTasks = [...this.state.tasks];
    const arrayId = copyTasks.findIndex((copyTask) => {
      return copyTask.id === id;
    })
    copyTasks.splice(arrayId, 1);

    this.setState({tasks: copyTasks});
  }

  handleClear = () => {
    this.setState({tasks: []});
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <h1>To do !</h1>
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
          {this.state.tasks.map((task) => {
            return(
              <div className="card mb-3 mt-3">
                <div className="card-body">
                  {task.content}    
                  <div>
                  <FontAwesomeIcon className="icons" onClick={() => this.handleEdit(task.id)} icon={faPen} color="#34A853" />
                  <FontAwesomeIcon className="icons" onClick={() => this.handleDelete(task.id)} icon={faTrash} color="#EA4335" />
                  </div>      
                </div>
              </div>
            )
          })}
          <button onClick={this.handleClear}>Clear list</button>
        </div>
      </Fragment>
    )
  }
}
