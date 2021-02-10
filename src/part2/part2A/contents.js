import React,{useState} from 'react';
import Content from './content.js';

const Contents=({notes})=>{


  
  
  const listItems= notes.map((item)=>  
     <Content text={item.content} key={item.id}></Content>
  
    
  );

  console.log(listItems)
  
 

  return(
        <div>
          {listItems}
        </div>   
  )
  

}

export default Contents;