import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import './Task.css';

const Task = props => {
  return (
    <div className="card my-3">
      <div className="card-body">
        {props.task.content}
        <div>
          <FontAwesomeIcon className="icons mx-2" /*onClick={() => props.onEdit(props.task.id)}*/ icon={faPen} color="#34A853" />
          <FontAwesomeIcon className="icons mx-2" /*onClick={() => props.onDelete(props.task.id)}*/ icon={faTrash} color="#EA4335" />
        </div>
      </div>
    </div>
  )
}

export default Task;
