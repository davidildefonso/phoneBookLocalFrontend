import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js';
import Content from './content.js';
import Total from './total.js';






const Course=({course,parts})=>{


  return(
    <div>
      <Header course={course}></Header>     
      <Content parts={parts} ></Content>
      <Total parts={parts}></Total>
    
    </div>
  )

}



export default Course;


