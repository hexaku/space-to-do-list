import React, { Fragment } from 'react'

const Form = props => {
  const {content, onChange, onSubmit} = props;
  return (
    <Fragment>
      <h1>Add a task</h1>
      <form onSubmit={onSubmit}>
        <input 
        placeholder="Add a new task !"
        value={content}
        onChange={onChange}
        />
        <button>Add !</button>
      </form>
    </Fragment>
  )
}

export default Form;
