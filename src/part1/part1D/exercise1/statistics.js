import React,{useState} from 'react';
import Stat from './stat.js'
import Total from './total.js'
import Average from './average.js'
import Positive from './positive.js'
import SubHeader from './subheader.js'

const Statistics=({good,neutral,bad})=>{

  const statsInfo=[
    {text:"good",value:good,id:1 },
    {text:"neutral",value:neutral ,id:2},
    {text:"bad",value:bad ,id:3}
  ];
  
  const stats= statsInfo.map(({text,value,id})=>
     <Stat text={text} value={value} key={id}></Stat>
    );
  
  const sum=statsInfo.reduce((a,b)=>{
    return a+b.value;
  },0);

  const avrg=(statsInfo[0].value-statsInfo[2].value)/sum;

  if(sum>0){
    return(
      <div>
        <SubHeader title="Statistics"></SubHeader>
        {stats}   
        <Total tot={sum}></Total>   
        <Average av={!Number(avrg)?0:avrg}></Average>
        <Positive percen={statsInfo[0].value*100/sum}></Positive>
      </div>
           
    )
  }

  return (
    <div>
      <SubHeader title="Statistics"></SubHeader>
      <div>No feedbacks given</div>
    </div>
    
  )

  
  
}

export default Statistics;