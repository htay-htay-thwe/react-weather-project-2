
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./weather";


function App() {
  return (
    <div className="App">
      
      <Weather cityDefault="New York"/>
     
      <p>
        <a href="https://github.com/htay-htay-thwe/react-weather-project-2">
          open sourced-code
        </a>{" "}
        by Htay Htay Thwe
      </p>
    </div>
  );
}

export default App;
