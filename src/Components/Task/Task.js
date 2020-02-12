import React from 'react'
import './Task.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const Task = props => {
  return (
    <div className="card mb-3 mt-3">
      <div className="card-body">
        {props.task.content}
        <div>
        <FontAwesomeIcon className="icons" onClick={() => props.onEdit(props.task.id)} icon={faPen} color="#34A853" />
        <FontAwesomeIcon className="icons" onClick={() => props.onDelete(props.task.id)} icon={faTrash} color="#EA4335" />
        </div>
      </div>
    </div>
  )
}

export default Task;
