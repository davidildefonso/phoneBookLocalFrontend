import React,{useState} from 'react';
import Title from './title.js';
import  Contents from './contents.js';
import Form from './form.js';


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

  const [theNotes,setNotes] = useState(notes);

  const [newNote,setNewNote] = useState("a new note...");

  const [showAll,setShowAll] = useState(true);
  
  const notesToShow = showAll?theNotes:theNotes.filter(
    note=> note.important
  );

  

  const addNote=(e)=>{
    e.preventDefault();
    const cpNotes=[...theNotes];
    const max= cpNotes.reduce((a,b)=>{
      if(a.id>b.id) return a.id;
      else return  b.id;
    });
  

    const theNewNote={
      id: max+1,
      content: newNote,
      date:new Date().toISOString(),
      important: Math.random()<0.5
    }
   

    setNotes(theNotes.concat(theNewNote));
    setNewNote("");
    console.log(theNotes)
    
  };

  const handleNoteChange= e=>{
    
    setNewNote(e.target.value);
  }

  const handleClick =()=>{
    setShowAll(!showAll)
  }

  return (
    <div>
      <Title text="Notes"></Title>
      <Contents notes={notesToShow} showAll={showAll}
        handleShowAllBtnClick={handleClick} ></Contents>
      <Form handleSubmit={addNote} handleInput={newNote}
        handleNoteChange={handleNoteChange}></Form>
    </div>
  )
}

export default App;










