import React,{useState,useEffect} from 'react';
import Title from './title.js';
import  Contents from './contents.js';
import Form from './form.js';
import axios from 'axios'




const App=()=>{

  const [theNotes,setNotes] = useState([]);

  const [newNote,setNewNote] = useState("a new note...");

  const [showAll,setShowAll] = useState(true);
  
  const notesToShow = showAll?theNotes:theNotes.filter(
    note=> note.important
  );


  useEffect(()=>{   
    axios
      .get("http://localhost:3001/notes")
      .then(response=>{        
        setNotes(response.data);
      })
  },[]);


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










