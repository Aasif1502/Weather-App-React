import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import {useState} from "react"
import Search from './Search';

export default function InfoBox( ) {
  let [info, setInfo] = useState({
    feels_like: 13.55,
    temp: 15.05,
    humidity: 36,
    pressure: 1017, 
    weather: "Haze",
    city: "Delhi"   
})
  let updateInfo = (result) => {
    setInfo(result)
  }
  let hazeImg = " https://media.istockphoto.com/id/1434013788/photo/the-road-was-thick-with-fog-with-trees-on-both-sides-morning-atmosphere-where-the-sun-is.jpg?s=612x612&w=0&k=20&c=CVxcBTyjncJD3u-orPMs0Oc--C9ydBwuO0ZRYPNO9Rs="
  let cloudImg = "https://t4.ftcdn.net/jpg/05/13/26/73/360_F_513267391_QEmNGeOFLLqrILTnoq21dReUPp5UsoNr.jpg"
  let clearImg = "https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=612x612&w=0&k=20&c=MGd2-v42lNF7Ie6TtsYoKnohdCfOPFSPQt5XOz4uOy4="
  let mistImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq2euiyfzgjgqyKyrVDGDA1Be-lLBDrM-qwA&s"
  let rainImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj7jyGdeP0nKj3MOBMAGrq1Satx-3R1HoZ5Q&s"
  let drizzleImg = "https://www.ireland-live.ie/resizer/640/-1/true/2018/05/01172741/weather-sunny-rain-0715-e1525276624787.jpg--weather__hazy_sunny_spells_expected_today__april_3__with_light_rain_and_drizzle.jpg"
    return (
       
 <div className='card'>
    <Card  sx={{ minWidth: 345 }}>
      <Search  updateInfo={updateInfo} />
      <CardMedia
        sx={{ height: 140 }}
        image= {info.weather== "Haze" ? hazeImg : info.weather == "Clouds" ? cloudImg : info.weather == "Clear"? clearImg : info.weather == "Mist"? mistImg : info.weather == "Drizzle" ? drizzleImg :  rainImg  }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           {info.city}
        </Typography>
        <Typography variant="body2" component={"span"} sx={{ color: 'text.secondary' }}>
           <p>Temp = {info.temp}&deg;C</p>
           <p>Humidity = {info.humidity}</p>
           <p>Pressure = {info.pressure}</p>
           <p>Feels Like = {info.feels_like}&deg;C</p>
           <p>Weather = {info.weather}</p>
           </Typography>
      </CardContent> 
    </Card>
         
      </div>
       

    )
}