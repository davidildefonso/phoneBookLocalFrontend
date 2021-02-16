import React,{useState} from 'react';
import Content from './content.js';


const Contents=({contacts,handleClick})=>{

  
  const listItems= contacts.map((item)=>  
     <Content name={item.name} 
              phone={item.number}
              key={item.id}
              handleClick={()=>handleClick(item.id,item.name)}
              ></Content>
  
    
  );

  

  return(
        <div>        
          {listItems}
        </div>   
  )
  

}

export default Contents;