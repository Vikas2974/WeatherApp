import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "088ebf4d89ccf55bf801d69f64826b6b";


    let getWeatherInfo = async () => {
        try {
            let response =await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error("City not found");
            }

            let jsonResponse = await response.json();
            setError(false);

            return {
                city : jsonResponse.name,
                temp: jsonResponse.main.temp,
                tempMin : jsonResponse.main.temp_min,
                tempMax : jsonResponse.main.temp_max,
                humidity : jsonResponse.main.humidity,
                feelsLike : jsonResponse.main.feels_like,
                weather : jsonResponse.weather[0].description,
            };
            
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setError(true);   
            return null; 
        }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
       
            evt.preventDefault();
            console.log("Fetching weather for",city);
            
            let newInfo = await getWeatherInfo();

            if (newInfo) {
                updateInfo(newInfo);
                setCity("");
            }else{
                console.log("City not Found")
            }
        
    }

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
              <TextField id="outlined-basic" label="City Name " variant="outlined"  required  value={city}  onChange={handleChange}/>
              <br></br> 
              <Button variant="contained" type="Submit" style={{ marginTop:"20px" }}>Search</Button>
            {error && <p>No such city found 😒</p>}  
            </form>           
        </div>
    );
}
