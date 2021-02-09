import React,{useState} from 'react';
import ReactDom from 'react-dom';




const App=()=>{
  const [left,setLeft]=useState(0);
  const [right,setRight]=useState(0);
  const [allClicks,setAll]=useState([]);

  const handleLeftClick=()=>{
    setAll(allClicks.concat("L"));
    setLeft(left+1);

  }

  const handleRightClick=()=>{
    
    setAll(allClicks.concat("R"));
    setRight(right+1);

  }

  

  return(
    <div>      
      {left}
      <Button handleClick={handleLeftClick} text="left"></Button>
      <Button handleClick={handleRightClick} text="right"></Button>
      {right}
     
      <History allClicks={allClicks}></History>
      
    </div>
  )

}


const History=(props)=>{
  if(props.allClicks.length===0){
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(" ")}
    </div>
  )
}


const Button=({handleClick,text})=>  
    <button onClick={handleClick}>{text}</button>;
  


ReactDom.render(
  <App></App>,document.getElementById("root")
)



