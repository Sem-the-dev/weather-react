import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import FormattedDate from "./FormattedDate";
import SearchTools from './SearchTools.css';

export default function WeatherInfo(props){
if (props.unit === "celsius"){
  return (
      <div className="WeatherInfo">
        <h1 className="City">
          {props.data.city}
        </h1>
        <h2 className="WeatherDescription text-capitalize">
          {props.data.description}
        </h2>
        <p className="LastUpdated">
          Last updated: <FormattedDate date={props.data.date}/>
        </p>
        <img src={props.data.icon} alt={props.data.description} />
      <p className="CurrentTemperature">
       {Math.round(props.data.temperature)}°
      </p>
      <br/>
      <p className="HighLowTemp">
        H: {Math.round(props.data.highTemp)}°
        L: {Math.round(props.data.lowTemp)}°
      </p>
      <p className="WeatherDetails">
        Feels like: {Math.round(props.data.feelsLike)}°
        <br />
        Windspeed: {Math.round(props.data.windspeed)} mph
        <br />
        Humidity: {Math.round(props.data.humidity)}%
        <br/>
        Sunrise: 07:00
        <br/>
        Sunset: 16:00
    </p>
      

</div> 
 
);
} else { 
let fahrenheit = (props.data.temperature * 9/5) + 32
return (
      <div className="WeatherInfo">
        <h1 className="City">
          {props.data.city}
        </h1>
        <h2 className="WeatherDescription text-capitalize">
          {props.data.description}
        </h2>
        <p className="LastUpdated">
          Last updated: <FormattedDate date={props.data.date}/>
        </p>
        <img src={props.data.icon} alt={props.data.description} />
      <p className="CurrentTemperature">
       {Math.round(fahrenheit)}°
      </p>
      <br/>
      <p className="HighLowTemp">
        H: {Math.round(props.data.highTemp * 9/5) + 32}°
        L: {" "} {Math.round(props.data.lowTemp * 9/5) + 32}°
      </p>
      <p className="WeatherDetails">
        Feels like: {Math.round(props.data.feelsLike * 9/5) + 32}°
        <br />
        Windspeed: {Math.round(props.data.windspeed)} mph
        <br />
        Humidity: {Math.round(props.data.humidity)}%
        <br/>
        Sunrise: 07:00
        <br/>
        Sunset: 16:00
    </p>
      

</div> 

);     
}
}