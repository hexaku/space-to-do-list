import React, { Component, Fragment } from 'react';
import "./List.css";
import Task from '../Task/Task';
import Form from '../Form/Form';

export default class List extends Component {
  state = {
    tasks: [],
    selected: "",
  }

  handleClear = () => {
    this.setState({tasks: []});
  }

  handleAdd = task => {
    const copyTasks = [...this.state.tasks];
    copyTasks.push(task);

    this.setState({tasks: copyTasks})
  }

  handleEdit = id => {
    const copyTasks = [...this.state.tasks];
    const arrayId = copyTasks.findIndex((copyTask) => {
      return copyTask.id === id;
    })
    copyTasks.splice(arrayId, 1);

    const selectedTask = this.state.tasks.find(task => task.id === id);

    this.setState({tasks: copyTasks, selected: selectedTask});
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
          <Form 
          onAdd={this.handleAdd}
          tasksLength={this.state.tasks.length}
          selectedTask={this.state.selectedTask}
          />
          {this.state.tasks.map((task) => {
            return(
              <Task task={task} onDelete={this.handleDelete} onEdit={this.handleEdit}/>
            )
          })}
          <button onClick={this.handleClear}>Clear list</button>
        </div>
      </Fragment>
    )
  }
}
