import React, { Fragment } from 'react'
import './Form.css'

const Form = props => {
  const {content, onChange, onSubmit} = props;
  return (
    <Fragment>
      <h1 className="title text-center my-3">Add a task</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input 
          className="form-control"
          placeholder="Add a new task !"
          value={content}
          onChange={onChange}
          required
          />
        </div>
        <button className="btn btn-success btn-block">Add !</button>
      </form>
    </Fragment>
  )
}

export default Form;
