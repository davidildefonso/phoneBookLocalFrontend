import React,{useState} from 'react';
import ReactDom from 'react-dom';




const App=()=>{
 
  const [counter,setCounter] = useState(0);

  /*
  const handleClick=(e)=>{
    if(e.target.textContent=="Plus"){
      increaseByOne();
    }else if(e.target.textContent=="Minus"){
      decreaseByOne();
    }
    
  }*/

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0)

  // counter automatico
  /* 
  setTimeout(
    ()=>setCounter(counter+1)
  ,1000);
*/

  return(
    <div>
      <Display counter={counter}></Display>
      <Button handleClick={increaseByOne} text="Plus"></Button>
      <Button handleClick={decreaseByOne} text="Minus"></Button>
      <Button handleClick={setToZero} text="Zero"></Button>
  
    </div>
  )

}


const Display=({counter})=>  <div>{counter}</div>;


const Button=({handleClick,text})=>  
    <button onClick={handleClick}>{text}</button>;
  


ReactDom.render(
  <App></App>,document.getElementById("root")
)



