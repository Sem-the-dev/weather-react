import React, {useState} from 'react';
import axios from 'axios';
import SearchTools from './SearchTools.css';
import ReactAnimatedWeather from 'react-animated-weather';


export default function SearchTool(props){
let[city, setCity] = useState("");
let[message, setMessage] = useState("")

    function updateCity(event){
    event.preventDefault();
    setCity(event.target.value);
    return (city)
    }

    function insertData(event){
    event.preventDefault();
    let apiKey = `8d62258f1cbe410bceed597214b7bfa5`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(getWeather);
    }
    
    function getWeather(response){
    setMessage(
      <div>
        <h1 className="City">
          {response.data.name}
        </h1>
        <h2 className="WeatherDescription">
          Sunny
        </h2>
        <p className="LastUpdated">
          Last updated: Monday at 9am
        </p>
        <ReactAnimatedWeather
    icon="CLEAR_DAY"
    color="gray"
    size={200}
    animate={true}
  />
      <p className="CurrentTemperature">
      {Math.round(response.data.main.temp)}°
      </p>
      <br/>
      <p className="HighLowTemp">
        H: {Math.round(response.data.main.temp_max)}°
        L: {Math.round(response.data.main.temp_min)}°
      </p>
      <p className="WeatherDetails">
        Feels like: {Math.round(response.data.main.feels_like)}°
        <br />
        Windspeed: {Math.round(response.data.wind.speed)} kph or mph
        <br />
        Humidity: {response.data.main.humidity}%
        <br/>
        Sunrise:07:00
        <br/>
        Sunset: 16:00
    </p>
      </div>
    );
    }

return (
<div className="container"> 
    <form onSubmit={insertData}>
    <div className="row search">
    <div className="col-6">
     <input type="search" placeholder="Type a city..." class="form-control" onChange={updateCity}/>
    </div>
    <div className="col-2 search-button">
     <input type="submit" value="Search" class="btn btn-outline-dark"/>
    </div>

    <div className="col-2 search-button">
     <input type="submit" value="Here" class="btn btn-outline-dark"/>
    </div>
    <div className="col-2 btn-group btn-group-toggle" data-toggle="buttons">
     <label class="btn btn-outline-dark">
      <input type="radio" name="options" id="fahrenheit-bttn" autocomplete="off"/> °F
    </label>
    <label class="btn btn-outline-dark">
    <input type="radio" name="options" id="celsius-bttn" autocomplete="off" checked/> °C
    </label>
     </div>
     </div>
    </form>
   <div>{message}</div>
      </div> )
    
}