import React, { Fragment } from 'react'
import Task from '../Task/Task'

const List = props => {
  return (
    <Fragment>
      {props.tasks.map(task => {
        return (
          <Task key={task.id} task={task}/>
        )
      })}
    </Fragment>
  )
}

export default List;
