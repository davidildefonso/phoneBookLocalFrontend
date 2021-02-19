import React,{useState,useEffect} from 'react';
import Title from './title.js';
import  Contents from './contents.js';
import Form from './form.js';
import Filter from './filter.js';
import axios from 'axios';
import contactService from '../../services/contacts.js'
import AddNotification from "./addNotification.js";


const App=()=>{

  const [theContacts,setContacs] = useState([]);

  useEffect(() => { 
    contactService
      .getAll()
      .then(initialContacts => {   
            
        setContacs(initialContacts)
        
          })
    }, [])

  

  const [filteredContacts,setFilteredContacs] = useState(theContacts);

  const [change,setChange] = useState("new");   

  const [newContact,setNewContact] = 
    useState({name:"  new  name...",
            number: " new phone number.."});
 
  const [addCtcMessage, setCtcMessage] = useState(null)
  

  const addContact=(e)=>{
    e.preventDefault();
      

    const theNewContact={
      
      name: newContact.name,
      number: newContact.number
   
    }
   
    

    contactService
      .getAll()
      .then(allContacts=>{
        return allContacts.find(c=>c.name===theNewContact.name)
      })
      .then(existingCtc=>{
        if(existingCtc){
          console.log(existingCtc)
          if(existingCtc.number===theNewContact.number){
            alert(`${theNewContact.name} is already added to the phonebook ` )
          }else{
            if(window.confirm(theNewContact.name +" is already added to phonebook, replace old number with a new one? ")){
              
              contactService
                .update(existingCtc.id,theNewContact)
                .then(returnedContact=>{
                console.log(returnedContact)
                console.log(existingCtc)          
                setContacs(theContacts.map(c=>c.name!==existingCtc.name?c:returnedContact))
                setCtcMessage("Number updated");
                setTimeout(() => {
                  setCtcMessage(null);
                }, 3000);
              })              
            }
             console.log(theContacts) 
            
          }
          
        }else{
          contactService
            .create(theNewContact)
            .then(returnedContact=>{
              setContacs(theContacts.concat(returnedContact));
              setNewContact({name:"",number:""}); 
              setChange("new");
              setCtcMessage("New Contact Added");
              setTimeout(() => {
                setCtcMessage(null);
              }, 3000);
            })
        }
      })
      

        
      

    
  };


  const deleteContact=(id,name)=>{

    if(window.confirm(`delete ${name}?`)){
     
      contactService
      .getAll()
      .then(allContacts=>{
        return allContacts.find(c=>c.name===name)
      })
      .then(existingCtc=>{
        contactService
        .remove(existingCtc.id)
        .then(respData=>{          
          const theContactsCopy=[...theContacts];
          const idx=theContactsCopy.findIndex(c=>c.name===name);
          theContactsCopy.splice(idx,1);
          setContacs(theContactsCopy);
        })
      })



      
    }

    
  }





  const handleContactNameChange= e=>{   
   
    setNewContact({...newContact,name: e.target.value});
    
  }

  
  const handleContactPhoneChange= e=>{
    
    setNewContact({...newContact,number: e.target.value});
  }

  const filter=e=>{
    
    setFilteredContacs(theContacts.filter(c=>{
      let name=c.name.toUpperCase();
      let char=e.target.value.toUpperCase();
      return name.indexOf(char)!==-1
    }));
    setChange("filter")
    
    
    
      
   
  };

  let contactList=[];

  if(change==="new"){
    contactList=[...theContacts];
  }else{
    contactList=[...filteredContacts];
  }

  
 

  return (
    <div>
      <Title text="PHONEBOOKK"></Title>
     
      <Filter text="Search filter: "
              handleInput={filter}
              currentName={newContact.name}
              contacts={theContacts}
      ></Filter>

      <Form handleSubmit={addContact}    
        nameInputValue={newContact.name}
         phoneInputValue={newContact.number}
        handleContactNameChange={handleContactNameChange}
        handleContactPhoneChange={handleContactPhoneChange}
        
       >
      </Form>
      <AddNotification message={addCtcMessage}></AddNotification>
      <Contents contacts={contactList} handleClick={deleteContact} ></Contents>

    </div>
    
   
  )
}

export default App;










