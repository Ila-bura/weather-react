import React from "react";
import axios from 'axios';
import Loader from "react-loader-spinner";

export default function Weather(props) {
 function   handleResponse(response) {
 alert(`The weather in ${response.data.name} is ${Math.round(response.data.main.temp)}°C`);}

     let apiKey = "5fb029ebc3ad09cdda11508274bae55c";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);

    return (
        <Loader
        type="Puff"
        color="blue"
        height={100}
        width={100}
        timeout={7000}
      />
    )
    }