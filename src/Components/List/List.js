import React, { Fragment } from 'react'
import Task from '../Task/Task'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo } from '@fortawesome/free-solid-svg-icons'

const List = props => {
  return (
    <Fragment>
      {props.tasks.map(task => {
        return (
          <Task 
          key={task.id}
          task={task}
          onDelete={props.onDelete}
          onEdit={props.onEdit}
          />
        )
      })}
      {props.tasks.length !== 0
      ? 
      <button 
      className="btn btn-warning btn-block"
      onClick={props.onClear}
      >
        Clear all
        <FontAwesomeIcon className="icons mx-2" icon={faUndo} color="black" />
      </button>
      :
      ""
      }
    </Fragment>
  )
}

export default List;
