import React, {useState} from "react";
import axios from 'axios';

export default function WeatherForecast(props){
  const [loaded, setLoaded] = useState(false)
    function getForecast(response){
      console.log(response.data)
  }
  
  
  let apiKey = `aea55e6fcec85bd9372335be0d239f49`;
  let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&units=metric&appid=${apiKey}`;
  axios.get(forecastUrl).then(getForecast);
    
    return props.city
}