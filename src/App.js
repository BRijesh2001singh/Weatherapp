import React, { useState } from "react";
import axios from 'axios';
import clouds from './wicon/cloudy.png';
import partly from './wicon/partly-cloudy.png';
import rain from './wicon/rainy.gif';
import stormy from './wicon/stormy.png';
import sunny from './wicon/sunny.png';
import defaultic from './wicon/defaultic.png';
import haze from './wicon/haze.png';
import snow from './wicon/snow.png';
function App() {
  const[data,setdata]=useState({});
  const[loc,setloc]=useState('');
  if(loc==="India"){setloc("Hindustan")}
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=7eaf5008fd83043b3941c20268203eb1&units=metric`;
     const searchloc=(e)=>{
      if(e.key ==='Enter'){
        axios.get(url).then((response)=>{
          setdata(response.data)
          console.log(response.data)
        })
       }
      }
      const icons = [partly, sunny, rain, clouds, stormy,defaultic,haze,snow];

      const getIcon = (weather) => {
        switch(weather){
          case "Clouds":
            return icons[3]
            break;
          case "Sunny":
            return icons[1]
            break;
          case "Clear":
            return icons[1]
            break;
          case "Rain":
            return icons[2]
            break;
          case "Overcast":
            return icons[3]
            break;
          case "Stormy":
            return icons[4]
            break;
            case "Haze":
            return icons[6]
            break;
            case "Snow":
              return icons[7]
              break;
          default:
            return icons[5]
        }
      } 
  return (
 <div className="app">
    <div className="container">
    <div className="search">
      <input type="text" placeholder="Enter City Name" defaultValue={loc} onChange={(e)=>setloc(e.target.value)} onKeyPress={searchloc}  />
    </div>
      <div className="top">
      <div className="location">
<p>{data.name==="Hindustan"?"India":data.name}</p>
      </div>
     <div className="temp">
      {data.main ? <h1>{data.main.temp}°C</h1>:null}
     </div>
     <div className="description">
     {data.main ? <p id="ic">{data.weather[0].main}</p>:null}
     </div>
     <div className='weather-icon'>
               <img className='icon' src={getIcon(data.main ?data.weather[0].main:null)} alt="wicon"></img>
               </div>
      </div>
      <div className="bottom">
          <div className="feelslike">
          {data.main ? <p className="bold">{data.main.feels_like}°F</p>:null}
            <p>feels like</p>
          </div>
          <div className="humidity">
          {data.main ? <p className="bold">{data.main.humidity}</p>:null}
            <p>humidity</p>
          </div>
          <div className="wind">
          {data.main ? <p className="bold">{data.wind.speed}KMH</p>:null}
            <p>Wind Speed</p>
          </div>
      
      </div>
    </div>
    </div>
  );
}

export default App;
