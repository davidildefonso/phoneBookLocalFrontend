import React,{useState} from 'react';

const Stat=({text,value})=>{
  return (
    <p >{text}: {value}</p>
  )
}

export default Stat;