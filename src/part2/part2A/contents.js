import React,{useState} from 'react';
import Content from './content.js';
import Button from './button.js'

const Contents=({notes,showAll,handleShowAllBtnClick})=>{


  console.log(notes)
  
  const listItems= notes.map((item)=>  
     <Content text={item.content} key={item.id}></Content>
  
    
  );

  let text= "show "+(showAll? "important":"all");
  
 

  return(
        <div>
          <Button handleClick={handleShowAllBtnClick} 
            text={text}></Button>
          {listItems}
        </div>   
  )
  

}

export default Contents;