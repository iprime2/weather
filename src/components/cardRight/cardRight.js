import React from 'react';
import './cardRight.css';
import OtherData from '../otherData/OtherData';
import Sports from '../sports/sports';
import Aqi from '../aqi/aqi';

function cardRight({data, sports}) {
  
  return (
    <div className='card-right-main'>
        <OtherData 
            data={data}/>
        <Aqi 
          aqiData={data.current.air_quality}/>
        {/*<Sports 
          sports={sports}/>*/}
    </div>
  )
}

export default cardRight