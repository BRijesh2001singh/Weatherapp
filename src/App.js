import React, { useState } from "react";
import axios from 'axios';
import clear from './images/clear.jpg';
import cloudsimg from './images/cloudsimg.jpg';
import hazeimg from './images/hazeimg.jpg';
import sunnyimg from './images/sunnyimg.jpg';
import thunderimg from './images/thunderimg.jpg';
import rainimg from './images/rainimg.jpg';
import snowimg from './images/snowimg.jpg';
function App() {
  const [data, setdata] = useState({});
  const [loc, setloc] = useState('');
  if (loc === "India") { setloc("Hindustan") }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=7eaf5008fd83043b3941c20268203eb1&units=metric`;
  const searchloc = (e) => {
    if (e.key === 'Enter') {
      axios.get(url).then((response) => {
        setdata(response.data)
      })
    }
  }

  var iconcode = data.main ? data.weather[0].icon : null;
  var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
  console.log(iconurl);
  let currweather = data.main ? data.weather[0].main : null;
  let currweatherimg;
  console.log(iconcode);
  function changebg() {
    switch (currweather) {
      case "Clouds":
        currweatherimg = cloudsimg;
        break;
      case "Sunny":
        currweatherimg = sunnyimg;
        break;

      case "Clear":
        currweatherimg = clear;
        break;

      case "Rain":
        currweatherimg = rainimg;
        break;

      case "Overcast":
        currweatherimg = rainimg;
        break;

      case "Stormy":
        currweatherimg = thunderimg;
        break;

      case "Haze":
        currweatherimg = hazeimg;
        break;
      case "Mist":
        currweatherimg = hazeimg;
        break;

      case "Snow":
        currweatherimg = snowimg;
        break;
      case "Thunderstorm":
        currweatherimg = thunderimg;
        break;
      default:
        currweatherimg = clear;
        break;
    }
  }
  changebg();
  return (
    <div className="app" style={{
      content: "",
      position: "fixed",
      width: "100%",
      height: "100%",
      maxHeight: "auto",
      maxWidth: "auto",
      backgroundImage: `url(${currweatherimg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <div className="container">
        <div className="search">
          <input type="text" placeholder="Enter City Name" defaultValue={loc} onChange={(e) => setloc(e.target.value)} onKeyPress={searchloc} />
        </div>
        <div className="top">
          <div className="location">
            <p>{data.name === "Hindustan" ? "India" : data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}°C</h1> : null}
          </div>
          <div className="description">
            {data.main ? <p id="ic">{data.weather[0].main}</p> : null}
          </div>
          <div className='weather-icon' >
            <img className='icon himage' src={iconurl} alt="" ></img>
          </div>
        </div>
        <div className="bottom">
          <div className="feelslike">
            {data.main ? <p className="bold">{data.main.feels_like}°F</p> : null}
            <p>feels like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}</p> : null}
            <p>humidity</p>
          </div>
          <div className="wind">
            {data.main ? <p className="bold">{data.wind.speed}KMH</p> : null}
            <p>Wind Speed</p>
          </div>

        </div>
      </div>
    </div >
  );
}

export default App;
