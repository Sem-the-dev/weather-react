import React, {useState} from 'react';
import axios from 'axios';

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
        <h1>
          {response.data.name}
        </h1>
        <h2>
          Sunny
        </h2>
        <p>
          Last updated: Monday at 9am
        </p>
       
      <p>
      {Math.round(response.data.main.temp)}°
      <br/>
        H: {Math.round(response.data.main.temp_max)}°
        L: {Math.round(response.data.main.temp_min)}°
      </p>
      <p>
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
<div>
    <form onSubmit={insertData}>
     <input type="search" placeholder="Type a city..." onChange={updateCity}/>
     <input type="submit" value="Search" />
     <input type="submit" value="Here" />
    </form>
   <div> <h2>{message}</h2></div>
      </div> )
    
}