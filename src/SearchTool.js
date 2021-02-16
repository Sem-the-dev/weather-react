import React, {useState} from 'react';
import axios from 'axios';

export default function SearchTool(props){
let[city, setCity] = useState("");
let[message, setMessage] = useState("")

    function updateCity(event){
    event.preventDefault();
    setCity(event.target.value);
    }

    function insertData(event){
    event.preventDefault();
    let apiKey = `8d62258f1cbe410bceed597214b7bfa5`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(getWeather);
    }
    
    function getWeather(response){
    setMessage(
      console.log(`the weather is ${response.data.main.temp}`)
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