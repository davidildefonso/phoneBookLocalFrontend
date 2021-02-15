import React,{useState,useEffect} from 'react';
import axios from 'axios'

const Content=({name,
               capital,
               population,
               languages,
               flag
              })=>{

  
  
  const selectWindDir = (windDir)=>{
    const compassSector = ["N",
               "NNE", "NE", "ENE",
                "E", "ESE", "SE",
                 "SSE", "S", "SSW", "SW",
                  "WSW", "W", "WNW", 
                  "NW", "NNW", "N"];

    return compassSector[(windDir/ 22.5).toFixed(0)];

  
  };

  const [weather,setWeather]=useState({main:{temp:""},
                                      weather:[{description:""}],
                                      wind:{}});   

  
  
  
  useEffect(() => { 
      axios
        .get('http://api.openweathermap.org/data/2.5/weather?q='+capital+'&APPID='+process.env.REACT_APP_API_KEY) // b86a2530c04b348fcc546a243749e846
        .then(response => {                                                                                     // process.env.REACT_APP_API_KEY
          setWeather(response.data)
            })
      }, [])

  


  
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
          <div>  
            <h3>{`Weather ins ${capital}`}</h3>
            <p>{`Temperature ins ${Math.round(weather.main.temp-273)}° C`}</p>
            <div><img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img></div>
            <p>{`Wind: ${weather.wind.speed} mph ${weather.wind.deg} ${selectWindDir(weather.wind.deg)}`}</p>
          </div>
        </div>
        
        
      )
    
    

  

}

export default Content;