import React, {useState} from "react";
import "./weather.css";
import axios from "axios";
import Weatherinfo from "./weatherinfo";
import WeatherForecast from "./weatherForecast";


export default function Weather(props){
    let [ready,setReady]=useState(false);
    let [weatherData,setWeatherData]=useState({});
    let [city,setCityname]=useState(props.cityDefault);
    
function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      coordinates : response.data.coord,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
    
    setReady(true);

}
function search() {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=97f8e93f00107773f88eafd933ce86b7&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(handleResponse);
}
function handleSubmit(event){
    event.preventDefault();
    search();
}
function changeCity(event){
setCityname(event.target.value);
}

if (ready){
    return (
      <div className="weather">
        <section>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="form-control"
                  onChange={changeCity}
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
          <Weatherinfo data={weatherData}/>
          <WeatherForecast coordinates={weatherData.coordinates}/>
          
        </section>
     </div>
    );

}else{
    search();
    return "loading...";
    
} 
}