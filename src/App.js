import './App.css';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Card from './components/card/card';
import ForecastCards from './components/forecastCards/forecastCards';
import {nanoid} from 'nanoid'; 
import CardRight from './components/cardRight/cardRight';
import Dailyforecast from './components/dailyForecast/dailyforecast';

  function App() {
    const keys = "eac4bed42c4740869f2174456220712"
    const [tempCity, setTempCity] = useState()
    const [city, setCity] = useState("kathmandu");
    const baseURL = `https://api.weatherapi.com/v1/forecast.json?key=${keys}&q=${city}&aqi=yes&alerts=yes&days=10`;
    const sportsURL = `https://api.weatherapi.com/v1/sports.json?key=${keys}&q=${city}`;
    const ipURL = `https://api.weatherapi.com/v1/ip.json?key=${keys}&q=auto:ip`;
    const [data, setData] = useState(null);
    const [sports, setSports] = useState(null);
    const [error, setError] = useState(null);
    

    async function API(){
      await axios.get(baseURL).then((response) => {
        setData(response.data)
      }).catch(error => {
          setError(error);
          console.log(error)
      });
    }

    async function sportsAPI(){
      await axios.get(sportsURL).then((response) => {
        setSports(response.data)
      }).catch(error => {
          setError(error);
          console.log(error)
      });
    }

    async function iplookupAPI(){
      await axios.get(ipURL).then((response) => {
        console.log(response)
        setCity(response.data.city)
      }).catch(error => {
          setError(error);
          console.log(error)
      });
    }

    React.useEffect(() => {
      iplookupAPI();
    },[])

    React.useEffect(() => {
      if (city)
        API();
        sportsAPI();
      /*if(data)
        if(tempCity != data.location.name)  
          alert("Please enter correct city name")*/
      
    },[city])

    function selectCity(event){
      const {name, value} = event.target
      setTempCity(value)
    }

    function submit(){
      setCity(tempCity)
    }

    console.log(data)
    console.log(city)

  return (
    <div className="App">
      
      <div className="search">
        <input 
            type="text" 
            placeholder="Enter the city Name"
            onChange={selectCity}
            value={tempCity}
            name="city"
            />
        <button onClick={submit} className="search-btn" > Submit</button>
    </div>

      <div className='main-content'>
        {data &&
          <Card 
            key={nanoid()}
            data={data}
          />
        }
        {data &&
          <CardRight 
            key={nanoid()}
            data={data}
            sports={sports}
            /> 
        }
      </div>


      {/*data &&
      <OtherData 
        key={nanoid()}
        />
    */}
      <div className='app-forecasts'>
        {data && 
          <ForecastCards
            key={nanoid()} 
            data={data}  
            hour={data.forecast.forecastday[0].hour}
            />}
        {/*<div className='sperator'>
          
        </div>*/}
        {data &&  
          <Dailyforecast 
              key={nanoid()}
              daily={data.forecast.forecastday}
            />}
      </div>
    </div>
  );
}


export default App;
