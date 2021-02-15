import React,{useState,useEffect} from 'react';
import Content from './content.js';
import Button from './button.js';


const Contents=({countries,
  inputValue,
  countrySelectedByButton,
  showCountryDetails,
  handleButtonClick,
  weather,
  
})=>{

  
  
    
  
  
  

  const listItems= countries.map((item)=>  
     <p key={item.numericCode}>{item.name} </p>
  
    
  );

  const countriesList= countries.map((c)=>  
     <p key={c.numericCode}>{c.name} 
      <Button handleClick={handleButtonClick} 
              showCountryDetails={showCountryDetails}></Button>
     </p>
  
    
  );

  

  if(listItems.length>10){
    return(
      <div>        
        "Too many matches, specify another filter."
      </div>   
    )
    
  }else if(listItems.length>1){


    if(countries.some(c=> c.name.toUpperCase()===inputValue.toUpperCase())){
      const country=countries.filter(c=> c.name.toUpperCase()===inputValue.toUpperCase())[0];
   
      
      return(

        <Content
          name={country.name}
          capital={country.capital}
          population={country.population}
          languages={country.languages}
          flag={country.flag}
          weather={weather}
          
        ></Content>
        
      )
    }
    
    

    else{

      if(!showCountryDetails){
        return(

          <div>        
            {countriesList}
          </div>   
        )
      }else{
       
        const country=countries.filter(c=> c.name.toUpperCase() === countrySelectedByButton.toUpperCase() )[0];
    
        return(

          <Content
            name={country.name}
            capital={country.capital}
            population={country.population}
            languages={country.languages}
            flag={country.flag}
            weather={weather}
          ></Content>
          
        )
      }

      
    }    
  }else if(listItems.length==1){
    const country=countries[0];
    return(
      <Content
          name={country.name}
          capital={country.capital}
          population={country.population}
          languages={country.languages}
          flag={country.flag}
          weather={weather}
        ></Content>
        
      
      
    )
  }else{
    return(
      <div></div>
    )
  }

  

  

 
  

}

export default Contents;