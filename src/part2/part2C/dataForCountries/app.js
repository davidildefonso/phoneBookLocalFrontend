import React,{useState,useEffect} from 'react';
import axios from 'axios'

import Title from './title.js';
import Filter from './filter.js';
import  Contents from './contents.js';




const App=()=>{

  const [theCountries,setCountries] = useState([]);
  const [showCountryDetails,setShow] = useState(false);
  const [countrySelectedByButton,setSelected] = useState("");
  const [weather,setWeather] = useState({});
  

  useEffect(() => { 
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {       
        setCountries(response.data)
          })
    }, [])


  
 

  const [filteredCountries,setFilteredCountries] = useState(theCountries);
  const [inputValue,setInputValue] = useState("");
   
  const filter=e=>{
    if(e.target.value!==""){
        setFilteredCountries(theCountries.filter(c=>{
            let name=c.name.toUpperCase();
            let char=e.target.value.toUpperCase();
            return name.indexOf(char)!==-1
          }));
        setInputValue(e.target.value);
    }else{
        setFilteredCountries([]);
    }
     
    setShow(false);
    
    
      
   
  };

  
  const toogleShow=(e)=>{
    setShow(!showCountryDetails);
    
    setSelected(e.target.previousSibling.textContent)
  }
 

  return (
    <div>
      <Title text="COUNTRY INFO"></Title>
     
      <Filter text="Enter a country name: "
              handleInput={filter}           
              
      ></Filter>

     <Contents countries={filteredCountries} 
                inputValue={inputValue}
                showCountryDetails={showCountryDetails}
                countrySelectedByButton={countrySelectedByButton}
                handleButtonClick={toogleShow}
                weather={weather}
                
                
                 ></Contents>

    </div>
    
   
  )
}

export default App;










