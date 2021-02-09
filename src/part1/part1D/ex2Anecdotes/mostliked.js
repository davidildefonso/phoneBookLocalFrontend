import React,{useState} from 'react';

const MostLikedAnecdote=({state,anecdotes})=>{  
  
  const cp={...state};
  delete cp.selected;
 
  const max= Object.keys(cp).reduce((a, b) => cp[a] > cp[b] ? a : b);
  

 
  if(cp[max]!==0){
    return (
      <div>
        <h3>Most Liked anecdote: </h3>
        <p> {anecdotes[max.slice(1,)]}</p>
        <p> Likes: {state[max]}</p>
      </div>
      
    )
  }

  return (
    <div><h3>Most Liked anecdote: </h3></div>
  )

  
}

export default MostLikedAnecdote;