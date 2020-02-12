import React, { Fragment } from 'react'
import Task from '../Task/Task'

const List = props => {
  return (
    <Fragment>
      <h4>Your tasks</h4>
      {props.tasks.map((task) => {
        return(
          <Task task={task}/>
        )
      })}
    </Fragment>
  )
}

export default List;