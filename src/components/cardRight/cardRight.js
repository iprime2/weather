import React from 'react';
import './cardRight.css';
import OtherData from '../otherData/OtherData';
import Sports from '../sports/sports';

function cardRight({data, sports}) {
  return (
    <div className='card-right-main'>
        <OtherData 
            data={data}/>
        <Sports 
          sports={sports}/>
    </div>
  )
}

export default cardRight