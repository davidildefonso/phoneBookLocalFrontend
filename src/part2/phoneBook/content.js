import React,{useState} from 'react';

const Content=({name,phone,handleClick})=>{
  return (
    <div>
        <p >Name: {name}, Phone: {phone}</p>
        <button onClick={handleClick}>Delete</button>
    </div>
  )
   
  
}

export default Content;