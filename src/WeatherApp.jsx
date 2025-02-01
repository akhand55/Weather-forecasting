import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import { border, borderRadius, padding } from "@mui/system";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Delhi",
        feelslike: 24.05,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    let styles = {
        // backgroundColor: "pink",
        border: "1px solid black",
        padding:"5px",
        borderRadius: "10px",
    }
    return(
        <div style = {styles} className="WeatherApp" >
            <h2>Weather App by AK</h2>
            <SearchBox updateInfo = {updateInfo}/> <br />
            <InfoBox info = {weatherInfo} />
        </div>
    );
};