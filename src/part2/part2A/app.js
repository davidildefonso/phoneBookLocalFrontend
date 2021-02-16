import React,{useState,useEffect} from 'react';
import Title from './title.js';
import  Contents from './contents.js';
import Form from './form.js';
import axios from 'axios'
import noteService from '../../services/notes.js'



const App=()=>{

  const [theNotes,setNotes] = useState([]);

  const [newNote,setNewNote] = useState("a new note...");

  const [showAll,setShowAll] = useState(true);
  
  const notesToShow = showAll?theNotes:theNotes.filter(
    note=> note.important
  );


  useEffect(()=>{   
    noteService
      .getAll()
      .then(initialNotes=>{        
        setNotes(initialNotes);
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
     
      content: newNote,
      date:new Date().toISOString(),
      important: Math.random()<0.5
    }
   
    noteService
      .create(theNewNote)
      .then(returnedNote=>{
        setNotes(theNotes.concat(returnedNote));
        setNewNote("");
      })

    
    
  };

  const handleNoteChange= e=>{
    
    setNewNote(e.target.value);
  }

  const handleClick =()=>{
    setShowAll(!showAll)
  }


  const toggleImportanceOf=(id)=>{
    
    const note= theNotes.find(n=>n.id===id);
    const changedNote = {...note,important:!note.important};

    noteService
      .update(id,changedNote)
      .then(returnedNote=>{
        console.log(returnedNote)
        setNotes(theNotes.map(note=>note.id!==id?note:returnedNote))
      })
      .catch(error=>{
        alert(        `the note '${note.content}' was already deleted from server`)
        setNotes(theNotes.filter(n=>n.id!==id))
      })
  };

  return (
    <div>
      <Title text="Notes"></Title>
      <Contents notes={notesToShow} showAll={showAll}
        handleShowAllBtnClick={handleClick}
        toggleImportanceOf={toggleImportanceOf}></Contents>
      <Form handleSubmit={addNote} handleInput={newNote}
        handleNoteChange={handleNoteChange}></Form>
    </div>
  )
}

export default App;










