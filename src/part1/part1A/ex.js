import React from 'react';
import ReactDOM from 'react-dom';


const Header=(props)=>{
  return(
    <h1>{props.course}</h1>
  )
}

const Ptag=(props)=>{  
  return(
    <p>{props.pair.name} {props.pair.exercises}</p>
  )
  
}



const Content=(props)=>{
 
  const items=props.parts;
  
  const listItems= items.map((item)=>
     <Ptag pair={item}></Ptag>
    );
  
  return(
        <div>
          {listItems}
        </div>   
  )
  

}


const Total=(props)=>{ 
  const items=props.parts; 
  const sum= items.reduce((a,b)=>a+b.exercises,0);
  
  return(
        <p>
          Number of exercises: {sum}
        </p>  
  )
  

}



const App=()=>{
  const course="half stack app developments";
  const parts=[{name:"fundamentals", exercises:10},
                {name:"using props", exercises:7},
                {name:"states", exercises:14}]



  return(
    <div>
      <Header course={course}></Header>     
      <Content parts={parts} ></Content>
      <Total parts={parts}></Total>
    
    </div>
  )

}



ReactDOM.render(

    <App />,document.getElementById('root')
);


