import React,{useState} from 'react';
import ButtonFeedback from './btnFeedback.js';
import SubHeader from './subheader.js'

const Feedbacks=({handleClickGood,handleClickNeutral,handleClickBad})=>{
  

  
  const buttonsInfo=[
    {text:"good",id:1,handleClick:handleClickGood},
    {text:"neutral",id:2,handleClick:handleClickNeutral},
    {text:"bad",id:3,handleClick:handleClickBad}
  ];
  
  const buttons= buttonsInfo.map(({text,id,handleClick})=>{
 
    return <ButtonFeedback key={id} handleClick={handleClick} text={text} ></ButtonFeedback>
  }
    
    );
  
  return(
        <div>
          <SubHeader title="Feedbacks"></SubHeader>
          {buttons}
        </div>   
  )
  
}

export default Feedbacks;