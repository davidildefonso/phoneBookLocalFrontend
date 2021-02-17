import React,{useState} from 'react';

const Form=({handleSubmit,handleInput,handleNoteChange})=>{
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input value={handleInput}
        onChange={handleNoteChange}></input>
      <button type="submit">Save</button>
    </form>
  )
}

export default Form;