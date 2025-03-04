import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";


export default function InfoBox( { info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1512641406448-6574e777bec6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

   
    return(
        
        <div className="InfoBox">
            <h1>Weather Information</h1>
            <div className="cardcontainer">
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia className="photu"
                sx={{ height: 190 }}
                image="https://images.unsplash.com/photo-1512641406448-6574e777bec6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Weather"
            />
            <CardContent>

                <div className='whole'> 
                <Typography gutterBottom variant="h5" component="div">
               {info.city}
                </Typography>
                
                <Typography variant="body2" color="text.secondary" component={"span"}>
                    <p>Temperature = {info.temp}&deg;C</p>  
                    <p>Humidity = {info.humidity}</p>  
                    <p>Min temp = {info.tempMin}&deg;C  </p>
                    <p>Max remp = {info.maxTemp}&deg;C </p>
                    <p>The Weathercan be described as {info.weather} and feels like {info.feelslike}&deg;C </p>              
                </Typography>
                </div>
            </CardContent>
            </Card>
            </div>
        </div>
    );
}