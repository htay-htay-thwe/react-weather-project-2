import React from "react";
import WeatherIcon from "./weatherIcon";
export default function WeatherforecastDay(props){

function day(){
    let date=new Date(props.data.dt * 1000);
    let day=date.getDay();
    let days=["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"]
    return days[day];
}

    return(
      <div>
         <div className="weatherforecast-day">{day()}</div>
        <div className="weatherforecast-icon">
          <WeatherIcon code={props.data.weather[0].icon} size={40}/>
        </div>
        <div className="weatherforecst-temperature">
          <span className="max">{Math.round(props.data.temp.max)}°</span>
          <span className="min">{Math.round(props.data.temp.min)}°</span>
 </div>
 </div>
    )
}