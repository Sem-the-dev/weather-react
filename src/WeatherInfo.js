import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
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
      
<div className="row hourly-weather">
<div className="col">
15:00
<br/>
  <ReactAnimatedWeather
    icon="CLEAR_DAY"
    color="gray"
    size={50}
    animate={true}
  />
<br/>
H:21° 
L:17°
</div> 
<div className="col">
18:00
<br/>
 <ReactAnimatedWeather
    icon="PARTLY_CLOUDY_DAY"
    color="gray"
    size={50}
    animate={true}
  />
<br/>
H:21° 
L:17°
</div> 
<div className="col">
21:00
<br/>
 <ReactAnimatedWeather
    icon="PARTLY_CLOUDY_NIGHT"
    color="gray"
    size={50}
    animate={true}
  />
<br/>
H:21° 
L:17°
</div> 
<div className="col">
00:00
<br/>
 <ReactAnimatedWeather
    icon="RAIN"
    color="gray"
    size={50}
    animate={true}
  />
<br/>
H:21° 
L:17°
</div> 
<div className="col">
03:00
<br/>
 <ReactAnimatedWeather
    icon="RAIN"
    color="gray"
    size={50}
    animate={true}
  />
<br/>
H:21° 
L:17°
</div> 
</div> 
</div> 
 
)
}