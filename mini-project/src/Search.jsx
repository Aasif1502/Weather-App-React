import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Search.css"
import {useState} from "react"



export default function Search({updateInfo}) {

    let [city, setCity] = useState("")
    
    const URL =  "https://api.openweathermap.org/data/2.5/weather?q="
    const API_KEY = "d9c62ab754c457a08e5cf1ea68213648"

    let weatherInfo = async ()=> {
    let response = await fetch(`${URL}${city}&appid=${API_KEY}&units=metric`);
    let jsonRes = await response.json();
    console.log(jsonRes)
    let result = {
        temp: jsonRes.main.temp,
        humidity: jsonRes.main.humidity,
        feels_like: jsonRes.main.feels_like,
        pressure: jsonRes.main.pressure,
        weather: jsonRes.weather[0].main,
        city: jsonRes.name
    }
    console.log(result)
    return result; 
}
    
    let handleSearch = (event)=> {
       setCity(event.target.value)
        
    }
    let handleSubmit = async (event)=> {
       event.preventDefault();
       console.log(city)
       let newInfo = await weatherInfo();
       setCity("")
       updateInfo(newInfo)
    }
    return (
        <div className='Search'>
            <form onSubmit={handleSubmit}>
              <TextField onChange={handleSearch} value={city} id="standard-basic" label="City Name" variant="outlined" size='small' required/>
              <Button variant="contained" size='small' type="submit">Search</Button><br /><br />

            </form>
        </div>
    )
}