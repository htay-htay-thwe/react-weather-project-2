import React, {useState} from "react";
import "./weather.css";
import axios from "axios";
import FormattedDate from "./formattedDate";

export default function Weather(){
    let [ready,setReady]=useState(false);
    let [weatherData,setWeatherData]=useState({});
    
function handleResponse(response){
    console.log(response.data);
    setWeatherData({
    temperature : Math.round(response.data.main.temp),
    city : response.data.name,
    wind : Math.round(response.data.wind.speed),
    humidity : response.data.main.humidity,
    description : response.data.weather[0].description,
    date : new Date(response.data.dt * 1000),

    })
    
    setReady(true);

}

if (ready){
    return (
      <div className="weather">
        <section>
          <form>
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="form-control"
                />
              </div>
              <div className="col-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Search"
                />
              </div>
            </div>
          </form>
          <h1>{weatherData.city}</h1>
          <ul>
            <li className="date"><FormattedDate date={weatherData.date}/></li>
            <li className="descri text-capitalize">{weatherData.description}</li>
          </ul>
          <div className="row">
            <div className="col-6">
              <p className="degree">
                <img
                  src="https://openweathermap.org/img/wn/10d@2x.png"
                  alt="rainy"
                />
                {weatherData.temperature}°C
              </p>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity : {weatherData.humidity}%</li>
                <li>Wind : {weatherData.wind}km/h</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );

}else{
let city="New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=97f8e93f00107773f88eafd933ce86b7&units=metric`;
   console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
    return "loading...";
}
    
} 