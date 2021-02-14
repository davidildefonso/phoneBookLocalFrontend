import React from 'react';
import Input from './input.js';

    
const Filter=({text,handleInput})=>{
  return (
      <div>
      {text}
      <Input 
        onChange={handleInput}></Input>
    </div>

  )
}

export default Filter;