import React, {useState} from "react";
import axios from 'axios';
//import ReactAnimatedWeather from "react-animated-weather";
import WeatherIcon from './WeatherIcon'

export default function WeatherForecast(props){
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function getForecast(response){
    setForecast(response.data)
    setLoaded(true);
  };
  
  if (loaded && props.city === forecast.city.name && props.unit === "celsius") {
    return (
<div className="row hourly-weather WeatherForecast">
<div className="col">
{new Date(forecast.list[0].dt * 1000).getHours()}:00
<br/>
  <WeatherIcon code={forecast.list[0].weather[0].icon} />
<br/>
H:{Math.round(forecast.list[0].main.temp_max)}° 
L:{Math.round(forecast.list[0].main.temp_min)}°
</div> 
<div className="col">
{new Date(forecast.list[1].dt * 1000).getHours()}:00
<br/>
 <WeatherIcon code={forecast.list[1].weather[0].icon} />
<br/>
H:{Math.round(forecast.list[1].main.temp_max)}° 
L:{Math.round(forecast.list[1].main.temp_min)}°

</div> 
<div className="col">
{new Date(forecast.list[2].dt * 1000).getHours()}:00
<br/>
 <WeatherIcon code={forecast.list[2].weather[0].icon} />
<br/>
H:{Math.round(forecast.list[2].main.temp_max)}° 
L:{Math.round(forecast.list[2].main.temp_min)}°

</div> 
<div className="col">
{new Date(forecast.list[3].dt * 1000).getHours()}:00
<br/>
 <WeatherIcon code={forecast.list[3].weather[0].icon} />
<br/>
H:{Math.round(forecast.list[3].main.temp_max)}° 
L:{Math.round(forecast.list[3].main.temp_min)}°

</div> 
<div className="col">
{new Date(forecast.list[4].dt * 1000).getHours()}:00
<br/>
 <WeatherIcon code={forecast.list[4].weather[0].icon} />
<br/>
H:{Math.round(forecast.list[4].main.temp_max)}° 
L:{Math.round(forecast.list[4].main.temp_min)}°

</div> 
</div>     
)

} else if (loaded && props.city === forecast.city.name && props.unit === "fahrenheit") {
  return (
<div className="row hourly-weather WeatherForecast">
<div className="col">
{new Date(forecast.list[0].dt * 1000).getHours()}:00
<br/>
 <WeatherIcon code={forecast.list[0].weather[0].icon} />
<br/>
H:{Math.round(forecast.list[0].main.temp_max * 9/5) + 32}°
L: {" "} {Math.round(forecast.list[0].main.temp_min * 9/5) + 32}°
</div> 
<div className="col">
{new Date(forecast.list[1].dt * 1000).getHours()}:00
<br/>
 <WeatherIcon code={forecast.list[1].weather[0].icon} />
<br/>
H:{Math.round(forecast.list[1].main.temp_max * 9/5) + 32}° 
L:{Math.round(forecast.list[1].main.temp_min * 9/5) + 32}°

</div> 
<div className="col">
{new Date(forecast.list[2].dt * 1000).getHours()}:00
<br/>
 <WeatherIcon code={forecast.list[2].weather[0].icon} />
<br/>
H:{Math.round(forecast.list[2].main.temp_max * 9/5) + 32}° 
L:{Math.round(forecast.list[2].main.temp_min * 9/5) + 32}°

</div> 
<div className="col">
{new Date(forecast.list[3].dt * 1000).getHours()}:00
<br/>
 <WeatherIcon code={forecast.list[3].weather[0].icon} />
<br/>
H:{Math.round(forecast.list[3].main.temp_max * 9/5) + 32}° 
L:{Math.round(forecast.list[3].main.temp_min * 9/5) + 32}°

</div> 
<div className="col">
{new Date(forecast.list[4].dt * 1000).getHours()}:00
<br/>
 <WeatherIcon code={forecast.list[4].weather[0].icon} />
<br/>
H:{Math.round(forecast.list[4].main.temp_max * 9/5) + 32}° 
L:{Math.round(forecast.list[4].main.temp_min * 9/5) + 32}°

</div> 
</div>     
)
  } else {
  let apiKey = `aea55e6fcec85bd9372335be0d239f49`;
  let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&units=metric&appid=${apiKey}`;
  axios.get(forecastUrl).then(getForecast);
    
    return null;
}

}