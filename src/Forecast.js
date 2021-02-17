import React from 'react';
import Forecast from './Forecast.css';
import ReactAnimatedWeather from 'react-animated-weather';

export default function forecast(){
   return ( <div className="row hourly-weather">
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
);
}
