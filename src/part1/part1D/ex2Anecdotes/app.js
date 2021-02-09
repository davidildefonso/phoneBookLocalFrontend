import React,{useState} from 'react';
import Button from './button.js';
import DisplayLikes from './like.js'
import MostLikedAnecdote from './mostliked.js'

const App=()=>{

  const [state, setSelected] = useState({selected:0,
    a0:0,a1:0,a2:0,a3:0,a4:0,a5:0});
  
  


  
  const getRandomQuote=()=>{   
    const stateCp={...state};
    stateCp.selected=  Math.floor(Math.random()*(anecdotes.length));
    setSelected( stateCp);
  }

  const likeAnecdote=()=>{
    const stateCp={...state};
    const sel=stateCp.selected;
    stateCp["a"+sel]++;
    setSelected(stateCp)
    
  }

  return (
    <div>
      <Button text="Get quote" handleClick={getRandomQuote}></Button>
      <div>
        {anecdotes[state.selected]}
      </div>
      <Button  handleClick={likeAnecdote} text="👍"></Button>
      <DisplayLikes state={state} ></DisplayLikes>
      <MostLikedAnecdote state={state} anecdotes={anecdotes}></MostLikedAnecdote>
    </div>
    
  )
  
  
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

export default App;