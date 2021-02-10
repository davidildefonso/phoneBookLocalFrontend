import React from 'react';
import Title from './title.js';
import  Contents from './contents.js';

const notes=[
  {
    id:1,
    content:"HTMl is easu",
    date:+new Date(),
    important: true
  },
  {
    id:2,
    content:"browser can execute only js",
    date:+new Date(),
    important: false
  },
  {
    id:3,
    content:"GET ad POST are the most important metgods of HTTP",
    date:+new Date(),
    important: true
  }
];


const App=()=>{
  return (
    <div>
      <Title text="Notes"></Title>
      <Contents notes={notes}></Contents>
    </div>
  )
}

export default App;










