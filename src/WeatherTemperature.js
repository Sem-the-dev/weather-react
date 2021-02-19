import React, { useState} from "react";

export default function WeatherTemperature(props){
    const [unit, setUnit] = useState("celsius");
    if (unit === "celsius") {
    return(
        <div>
        <p className="CurrentTemperature">
       {Math.round(props.celsius)}°
      </p>
      </div>
    );
    } else {
        return "F"
    }
}
