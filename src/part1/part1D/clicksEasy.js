import React,{useState} from 'react';
import ReactDom from 'react-dom';




const App=()=>{

  const [clicks,setClicks]=useState({left:0,right:0});

  const handleLeftClick=()=>{
   
    setClicks({...clicks,left:clicks.left+1});

 /*   const newClicks={

      ...clicks,
      left:clicks.left+1

     /* left:clicks.left+1,
      right:clicks.right*/

/*
    };
    
    setClicks(newClicks);*/


  }

  const handleRightClick=()=>{
    setClicks({...clicks,right:clicks.right+1});
  }

  

  return(
    <div>      
      {clicks.left}
      <Button handleClick={handleLeftClick} text="left"></Button>
      <Button handleClick={handleRightClick} text="right"></Button>
      {clicks.right}
  
    </div>
  )

}





const Button=({handleClick,text})=>  
    <button onClick={handleClick}>{text}</button>;
  


ReactDom.render(
  <App></App>,document.getElementById("root")
)



