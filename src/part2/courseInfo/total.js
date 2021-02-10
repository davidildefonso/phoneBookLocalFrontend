import React from 'react';

const Total=(props)=>{ 
  const items=props.parts; 
  const sum= items.reduce((a,b)=>a+b.exercises,0);
  
  return(
        <p>
          Number of exercises: {sum}
        </p>  
  )
  

}


export default Total;