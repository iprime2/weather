import React from 'react';
import './dailyforecast.css';

function dailyforecast({daily}) {

  function formatDate(string){
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
  }


  const dailyForecastELe = daily.map((item, index) => {
            if (index > 0)
                return <div className='dailyforecast-cards'>
                          <h3>{formatDate(item.date).slice(0,12)}</h3>
                          <img src={item.day.condition.icon} alt="" />
                          <p>{Math.round(item.day.avgtemp_c)}°</p>
                        </div>
  })
  return (
    <div className='dailyforecast-main'>
      <h5>
        Daily Forecast
      </h5>
      {daily && dailyForecastELe}
    </div>
  )
}

export default dailyforecast