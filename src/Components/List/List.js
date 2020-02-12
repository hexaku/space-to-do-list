import React, { Fragment } from 'react'
import Task from '../Task/Task'

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
    </Fragment>
  )
}

export default List;
