import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(){
return (
      <div className="WeatherInfo">
        <h1 className="City">
          {weatherData.city}
        </h1>
        <h2 className="WeatherDescription text-capitalize">
          {weatherData.description}
        </h2>
        <p className="LastUpdated">
          Last updated: <FormattedDate date={weatherData.date}/>;
        </p>
        <img src={weatherData.icon} alt={weatherData.description} />
      <p className="CurrentTemperature">
       {weatherData.temperature}
      </p>
      <br/>
      <p className="HighLowTemp">
        H: {Math.round(wetherData.highTemp)}°
        L: {Math.round(wetherData.lowTemp)}°
      </p>
      <p className="WeatherDetails">
        Feels like: {Math.round(weatherData.feelsLike)}°
        <br />
        Windspeed: {Math.round(weatherData.windspeed)} kph or mph
        <br />
        Humidity: {Math.round(weatherData.humidity)}%
        <br/>
        Sunrise:07:00
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