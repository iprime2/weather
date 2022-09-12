import React from 'react';
import humidity from '../../images/humidity.png';
import rain from '../../images/rainy.png';
import cloud from '../../images/cloudy-day.png';
import wind from '../../images/wind.png';
import windDirection from '../../images/wind-direction.png';
import sunrise from '../../images/sunrise.png'
import sunset from '../../images/sunset.png'
import './otherData.css';
import Box from '../otherBox/otherBox';


function OtherData({data}) {
  console.log(data)
  return (
    <div className='other-main'>
      <div className='sub-other-main'>
        <div className='other-main-box'>
          <img src={humidity} alt='logo' />
          <h6>{data.current.humidity}<span className='other-sign'>%</span></h6>
        </div>
        <div className='other-main-box'>
          <img src={rain} alt='logo' /> 
          <h6>{data.current.precip_mm}<span className='other-sign'>mm</span></h6>
        </div>
        <div className='other-main-box'>
          <img src={cloud} alt='logo' /> 
          <h6>{data.current.cloud}<span className='other-sign'>%</span></h6>
        </div>
        <div className='other-main-box'>
          <img src={wind} alt='logo' /> 
          <h6>{data.current.wind_kph}<span className='other-sign'>km</span></h6>
        </div>
        {/*<div className='other-main-box-border-none'>
          <img src={windDirection} alt='logo' /> 
          <h6>{data.current.wind_dir}<span className='other-sign'></span></h6>
        </div>*/}
      </div>
      <div className='bottom-other-main'>
        <div className='sunrise'>
          <img src={sunrise} alt="logo" />
          <p>{data.forecast.forecastday[0].astro.sunrise}</p>
        </div>
        <div className='sunset'>
          <img src={sunset} alt="logo" />
          <p>{data.forecast.forecastday[0].astro.sunset}</p>
        </div>
      </div>
      
      {/*<ul>
        <li>
          <img src={humidity} alt='logo' /> 
          <h6>{data.current.humidity}<span className='other-sign'>%</span></h6>
        </li>
        <li>
          <img src={mm} alt='logo' /> 
          <h6>{data.current.precip_mm}<span className='other-sign'>mm</span></h6>
        </li>
        <li>
          <img src={temp} alt='logo' /> 
          <h6>{data.current.feelslike_c}<span className='other-sign'>°</span></h6>
        </li>
        <li>
          <img src={wind} alt='logo' /> 
          <h6>{data.current.wind_kph}<span className='other-sign'>km</span></h6>
        </li>
      </ul>*/}
    </div>
  )
}

export default OtherData