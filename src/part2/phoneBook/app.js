import React,{useState} from 'react';
import Title from './title.js';
import  Contents from './contents.js';
import Form from './form.js';
import Filter from './filter.js';

const contacts=[
  {
    id:1,
    name:"david",
    phone:"9897979"
  },
  {
    id:2,
    name:"mama",
    phone:"9797979"
  },
  {
    id:3,
    name:"daniel",
    phone:"129897979"
  }
  ,
  {
    id:4,
    name:"sebas",
    phone:"9989646"
  }
]


const App=()=>{

  const [theContacts,setContacs] = useState(contacts);

  const [filteredContacts,setFilteredContacs] = useState(contacts);

  const [change,setChange] = useState("");   

  const [newContact,setNewContact] = 
    useState({name:"  new  name...",
            phone: " new phone number.."});
 
  

  const addContact=(e)=>{
    e.preventDefault();
    const cpContacts=[...theContacts];
    const max= cpContacts.reduce((a,b)=>{
      if(a.id>b.id) return a.id;
      else return  b.id;
    });
  

    const theNewContact={
      id: max+1,
      name: newContact.name,
      phone: newContact.phone
   
    }
   
    const includesNewName= (n)=>n.name===theNewContact.name;

    if(theContacts.some(includesNewName)){
      alert(`${theNewContact.name} is already added to the phonebook ` )
      
    }else{
      setContacs(theContacts.concat(theNewContact));
      
      setNewContact({name:"",phone:""}); 
      setChange("new");
    }

       
    
  };

  const handleContactNameChange= e=>{   
   
    setNewContact({...newContact,name: e.target.value});
    
  }

  
  const handleContactPhoneChange= e=>{
    
    setNewContact({...newContact,phone: e.target.value});
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
         phoneInputValue={newContact.phone}
        handleContactNameChange={handleContactNameChange}
        handleContactPhoneChange={handleContactPhoneChange}
        
       >
      </Form>

      <Contents contacts={contactList}  ></Contents>

    </div>
    
   
  )
}

export default App;










