import React from 'react';
import Content from './content.js';



const Contents=({countries,inputValue})=>{

  const listItems= countries.map((item)=>  
     <p key={item.numericCode}>{item.name} </p>
  
    
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
        ></Content>
        
      )
    }
    
    

    else{
      return(
        <div>        
          {listItems}
        </div>   
      )
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
        ></Content>
        
      
      
    )
  }else{
    return(
      <div></div>
    )
  }

  

  

 
  

}

export default Contents;