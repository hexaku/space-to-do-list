import React from 'react'
import './Task.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const Task = props => {
  const {id, content} = props.task
  return (
    <div className="card my-3">
      <div className="card-body">
        {content}
        <div>
          <FontAwesomeIcon className="icons mx-2" onClick={() => props.onEdit(id)} icon={faPen} color="#34A853" />
          <FontAwesomeIcon className="icons mx-2" onClick={() => props.onDelete(id)} icon={faTrash} color="#EA4335" />
        </div>
      </div>
    </div>
  )
}

export default Task;
