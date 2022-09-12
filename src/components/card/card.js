import React, { useState } from 'react';
import location from '../../images/location.svg'
import refersh from '../../images/refresh.png';
import './card.css'


const Card = ({data}) => {
    /*const time = new Date().toLocaleTimeString();*/
    const date = new Date().toDateString();
    /*const [currentTime, setCurrentTIme] = useState(time)

    const updateTime = () => {
        let time = new Date().toLocaleTimeString
        setCurrentTIme(time)
    }

    setInterval(updateTime, 1000)*/

    function refresh(){
        window.location.reload(false);
    }

    function formatDate(string){
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
      }
    
  return (
    <div className='main'>
        <div className='card-main'>
            <div className='card-top'>
                <p className='card-date'>{formatDate(date)}</p>
            </div>
            <div className='card-bottom'>
                <div className='card-bottom-location'>
                    <img src={location} alt="loc" />
                    <h3>{data.location.name},{data.location.country}</h3>
                </div>
                <div className='bottom-temp-container'>
                    <img src={data.current.condition.icon} className="img" alt="logo" />
                    <p>{Math.round(data.current.temp_c)}°</p>
                    <section>{Math.round(data.forecast.forecastday[0].day.maxtemp_c)}° 
                    <br /> {Math.round(data.forecast.forecastday[0].day.mintemp_c)}°</section>  
                </div>
            </div>
        </div>
        <div className='weather-text'>
            <h5>{data.current.condition.text}</h5>
        </div>        
        <div className='main-footer'>
            <span>last updated: &nbsp;</span> 
            <h5>{data.location.localtime.slice(11,16)}</h5>
            <img src={refersh} alt="refresh-logo" onClick={refresh} />
        </div>
    </div>
  )
}

export default Card