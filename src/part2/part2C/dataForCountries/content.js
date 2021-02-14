import React from 'react';


const Content=({name,
               capital,
               population,
               languages,
               flag
              })=>{

  
  return(
        <div>
          <h3 >{name}</h3>   
          <p> Capital: {capital} </p>
          <p>Population: {population}</p>
          <h4>Languages</h4>
          <ul>
            {languages.map(l =>
              <li key={l.iso639_2}  >{l.name}</li>
            )}
            
          </ul>
          <div><img src={flag} width="100vw" ></img></div>
        </div>
        
        
      )
    
    

  

}

export default Content;