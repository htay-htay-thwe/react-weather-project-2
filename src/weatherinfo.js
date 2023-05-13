import React from "react";
import FormattedDate from "./formattedDate";
export default function Weatherinfo(props){
    return (
        <div className="weathrinfo">
         <h1>{props.data.city}</h1>
          <ul>
            <li className="date"><FormattedDate date={props.data.date}/></li>
            <li className="descri text-capitalize">{props.data.description}</li>
          </ul>
          <div className="row">
            <div className="col-6">
              <p className="degree">
                <img src={props.data.icon} alt="weather condition"/>
                {props.data.temperature}°C
              </p>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity : {props.data.humidity}%</li>
                <li>Wind : {props.data.wind}km/h</li>
              </ul>
            </div>
          </div>
        
      </div>
    
    );
}