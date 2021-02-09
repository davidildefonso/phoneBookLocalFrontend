import React,{useState} from 'react';
import Header from './header.js';
import Feedbacks from './feedbacks.js';
import Statistics from './statistics';

const App=()=>{

  const [good,setGood] = useState(0);  
  const [neutral,setNeutral] = useState(0);  
  const [bad,setBad] = useState(0);  


  const increaseGood = () =>{ 
    console.log(good)
    return setGood(good + 1)};
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);





  return(
  <> 
    <Header title="What do you think of the app? "></Header>
    <Feedbacks handleClickGood={increaseGood} 
       handleClickNeutral={increaseNeutral} 
        handleClickBad={increaseBad} ></Feedbacks>
    <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
  </>
  )
}

export default App;
