import React,{useState} from 'react';
import Input from './input.js';


const Filter=({text,handleInput,
  currentName,
  contacts
  
 })=>{
  return (
  
    <div>
      {text}
      <Input 
        onChange={handleInput}></Input>
    </div>
    

      

      

 
  )
}

export default Filter;