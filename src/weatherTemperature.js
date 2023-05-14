import React, {useState} from "react";
import "./weatherTemperature.css";
export default function WeatherTemperature(props){
    let [unit,setUnit]=useState("celsius");

    function showFahrenheit(event){
event.preventDefault();
setUnit("fahrenheit");
    }
    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius"){
       
return (
     
  <span className="weatherTemperature">
    <span className="tem">{props.celsius}</span>

    <span className="cel">°C</span>/
  
      <a href="/" onClick={showFahrenheit}>
        °F
      </a>
   
  </span>
);
    }else{
     let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
        return (
          <span className="weatherTemperature">
            <span className="tem">{fahrenheit}</span>
            <span className="cel"><a href="/" onClick={showCelsius}>°C</a></span>/
              °F
              
            </span>
        );
    }

}