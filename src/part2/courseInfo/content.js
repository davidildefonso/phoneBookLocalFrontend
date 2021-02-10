
import React from 'react';

const Ptag=(props)=>{  
  return(
    <p>{props.pair.name} {props.pair.exercises}</p>
  )
  
}



const Content=(props)=>{
 
  const items=props.parts;
  
  const listItems= items.map((item)=>
     <Ptag pair={item} key={item.id} ></Ptag>
    );
  
  return(
        <div>
          {listItems}
        </div>   
  )
  

}

export default Content;