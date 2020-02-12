import React, { Component } from 'react'
import './Task.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';

class Task extends Component {
  state = {
    isDone: false,
  }

  handleCheck = () => {
    console.log(this.state.isDone)
    this.setState({isDone: !this.state.isDone})
  }

  render(){
    const {id, content} = this.props.task
    return (
      <div className="card my-3 loop-border" onClick={this.handleCheck}>
        <div className="card-body">
          <span className={this.state.isDone ? "done" : ""}>{content}</span>
          <div>
            <span className="span-icon"><FontAwesomeIcon className="icons mx-2" onClick={() => this.props.onEdit(id)} icon={faPen} color="#2ecc71" /></span>
            <span className="span-icon"><FontAwesomeIcon className="icons mx-2" onClick={() => this.props.onDelete(id)} icon={faTrash} color="#EA4335" /></span>
          </div>
        </div>
      </div>
    )
  }
}

export default Task;
