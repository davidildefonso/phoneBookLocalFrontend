import React,{useState} from 'react';

const Positive=({percen})=>{
  return (
    <p >Positive: {!Number(percen)?0:percen}% </p>
  )
}

export default Positive;