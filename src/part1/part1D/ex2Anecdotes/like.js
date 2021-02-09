import React,{useState} from 'react';

const DisplayLikes=({state})=>{  
  
 
  const sel=state.selected;
  
 

  return (
    <p>Likes: {state["a"+sel]}</p>
  )
}

export default DisplayLikes;