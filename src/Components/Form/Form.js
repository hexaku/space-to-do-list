import React, { Fragment } from 'react'
import './Form.css'

const Form = props => {
  const {content, onChange, onSubmit, isEdited} = props;
  return (
    <Fragment>
      <h1 className="title text-center my-5">Space To Do List ☄️</h1>
      <form className="mb-5" onSubmit={onSubmit}>
        <div className="form-group">
          <input 
          className="form-control"
          placeholder="Add a new intergalactic task !"
          value={content}
          onChange={onChange}
          required
          />
        </div>
        {
        isEdited 
        ?
        <button className="btn btn-success btn-block">Edit ! 🌠</button>
        :
        <button className="btn btn-blue btn-block">Add ! 🌠</button>
        }
      </form>
    </Fragment>
  )
}

export default Form;
