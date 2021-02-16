import React,{useState} from 'react';
import Content from './content.js';
import Button from './button.js'

const Contents=({notes,showAll,
  handleShowAllBtnClick,
  toggleImportanceOf})=>{


  
  
  const listItems= notes.map((item)=>  
     <Content text={item.content}
      handleClick={()=>toggleImportanceOf(item.id)}
      buttonLabel={item.important?"make not important":"make important"}
      key={item.id}></Content>
  
    
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