import React,{useState} from 'react';

const Content=({text,handleClick,buttonLabel})=>{
  return (
    <div>
      <p >{text}</p>
      <button onClick={handleClick} >{buttonLabel}</button>
    </div>
   
  )
}

export default Content;