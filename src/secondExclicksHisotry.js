import React,{useState} from 'react';
import ReactDom from 'react-dom';



const App=()=>{
  const [value,setValue]=useState(10);
  
  const setToValue=(newValue)=>{
    setValue(newValue)
  }

  /*
  const setToValue=(newValue)=>()=>
    setValue(newValue);*/
  
        /*
    const handleLeftClick=()=>{
      setValue(0);
    }*/

  const hello=(who)=>()=>
    console.log("hello ",who);
 



  return(
    <div>      
      <Display value={value}></Display> 
      
      {/* <Button handleClick={hello("david")} text="reset to zero"></Button> */}
     
      {/* <Button handleClick={setToValue(1000)} text="mil"></Button>
      <Button handleClick={setToValue(0)} text="cero"></Button>
      <Button handleClick={setToValue(value+1)} text="mas uno"></Button> 
       */}

      <Button handleClick={()=>setToValue(value+1)} text="mas uno"></Button> 

    </div>
  )

}

const Display = ({value})=>
  <div>{value}</div>

const Button=({handleClick,text})=>  
    <button onClick={handleClick}>{text}</button>;
  


ReactDom.render(
  <App></App>,document.getElementById("root")
)



