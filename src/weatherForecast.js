import React, {useState, useEffect} from "react";
import axios from "axios";

import WeatherforecastDay from "./weatherforecastDay";
export default function WeatherForecast(props){
    let [loaded,setLoaded]=useState(false);
    let[forecast,setForecast]=useState(null);

useEffect(()=> {
setLoaded(false);
},[props.coordinates]);


function handleResponse(response){
   setForecast(response.data.daily);
   setLoaded(true);
}

if(loaded){

return (
  <div className="weatherForecast">
    <div className="row">
        {forecast.map(function(dailyforecast,index){
if(index<6){
        return( <div className="col" key={index}>
        <WeatherforecastDay data={dailyforecast}/>
        </div>)}
        else{
            return null;
        }
        })}
    
     
      </div>
    </div>

);
} else{
    

    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=97f8e93f00107773f88eafd933ce86b7&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    console.log(apiUrl);
    return null;
}
}