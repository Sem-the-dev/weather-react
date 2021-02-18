import React, {useState} from 'react';
import axios from 'axios';
import SearchTools from './SearchTools.css';
import Loader from "react-loader-spinner";
import FormattedDate from "./FormattedDate"
import WeatherInfo from "./WeatherInfo";

export default function SearchTool(props){
  const[city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({ready: false});


    function updateCity(event){
    event.preventDefault();
    setCity(event.target.value);
    return (city)
    }

    function insertData(event){
    event.preventDefault();
    
    }
    
    function getWeather(response){
    setWeatherData({
      ready: true,
      city: response.data.name,
      description: response.data.weather[0].description,
      lastUpdated: new Date(response.data.dt * 1000) ,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      highTemp: response.data.main.temp_max,
      lowTemp: response.data.main.temp_min,
      feelsLike: response.data.main.feels_like,
      windspeed: response.data.wind.speed,
      humidity: response.data.main.humidity,
      sunrise: "07:00",
      sunset: "16:00",
    })
;
}

    if (weatherData.ready){

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
    <label className="btn btn-outline-dark">
    <input type="radio" name="options" id="celsius-bttn" autocomplete="off" checked/> °C
    </label>
     </div>
     </div>
    </form>
    <WeatherInfo />
      </div> 
)
    } else {
    let apiKey = `8d62258f1cbe410bceed597214b7bfa5`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(getWeather);
    
    return  <Loader type="BallTriangle" color="gray" height={150} width={150} />
    }
} 