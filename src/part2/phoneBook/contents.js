import React,{useState} from 'react';
import Content from './content.js';


const Contents=({contacts})=>{

  
  const listItems= contacts.map((item)=>  
     <Content name={item.name} 
              phone={item.phone}
              key={item.id}></Content>
  
    
  );

  

  return(
        <div>        
          {listItems}
        </div>   
  )
  

}

export default Contents;