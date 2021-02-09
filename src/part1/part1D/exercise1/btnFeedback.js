import React,{useState} from 'react';

const ButtonFeedback=({id,text,handleClick})=>{  
  return (
    <button key={id} onClick={handleClick} >{text}</button>
  )
}

export default ButtonFeedback;