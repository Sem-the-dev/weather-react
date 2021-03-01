import React, {useState} from 'react';
import axios from 'axios';
import SearchTools from './SearchTools.css';
import Loader from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function SearchTool(props){
  const [unit, setUnit] = useState("celsius");
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ready: false});
  
  function showFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit")
}

function showCelsius(event){
    event.preventDefault();
    setUnit("celsius")
}
  

    function search(){
    let apiKey = `8d62258f1cbe410bceed597214b7bfa5`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(getWeather);
    };


    function handleSubmit(event){
    event.preventDefault();
    };


    function updateCity(event){
    event.preventDefault();
    setCity(event.target.value);
    search();
    };

    
    
    function getWeather(response){
    setWeatherData({
      ready: true,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000) ,
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
};

    if (weatherData.ready){

return (
<div className="container"> 
    <form onSubmit={handleSubmit}>
    <div className="row search">
    <div className="col-6">
     <input type="search" placeholder="Type a city..." className="form-control" onChange={updateCity}/>
    </div>
    <div className="col-2 search-button">
     <input type="submit" value="Search" className="btn btn-outline-dark"/>
    </div>

    <div className="col-2 search-button">
     <input type="submit" value="Here" className="btn btn-outline-dark"/>
    </div>
    <div className="col-2 btn-group btn-group-toggle" data-toggle="buttons">
     
     <label className="btn btn-outline-dark">
      <input type="radio" name="options" id="fahrenheit-bttn" autoComplete="off" onClick={showFahrenheit}/> °F
    </label>
    <label className="btn btn-outline-dark">
    <input type="radio" name="options" id="celsius-bttn" autoComplete="off" onClick={showCelsius}/> °C
    </label>
     </div>
     </div>
    </form>
    <WeatherInfo data={weatherData} unit={unit} />
    <WeatherForecast city={weatherData.city} unit={unit} />
      </div> 
)
    } else {

    search();
    return  <Loader type="BallTriangle" color="gray" height={150} width={150} />
    }
} 