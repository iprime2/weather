import React from 'react';
import './forecastCards.css';
import OtherData from '../otherData/OtherData';



function forecastCards({hour, data}) {
  

  const currentTime = data.location.localtime.slice(11,13)
  const forecastEle = hour.map(item => {
    if (item.time.slice(11,13) > currentTime ) 
      return <div className='forecast-cards'>
                <h4>{item.time.slice(11, 16)}</h4>
                <img src={item.condition.icon} alt="" />
                <p>{Math.round(item.dewpoint_c)}°</p>
                {/*<ForecastDetails hour={hour} />*/}
              </div>
    })
  return (
    <div className='forecast-main'>
      <h5>
        Hourly Forecast
      </h5>
        {hour && forecastEle}
    </div>
  )
}

export default forecastCards