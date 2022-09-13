import React from 'react';
import { useState } from 'react';
import './sports.css';
import stadium from '../../images/stadium.png'

function Sports({sports}) {
    const [football, setFootball] = useState(true)
    const [cricket, setCricket] = useState(false)

    const footballEle = sports.football.map(type => {
        return <div className='content'>
                    <h3>{type.tournament}</h3>
                    <p>{type.match}</p>
                    <div className='sub'>
                        <img src={stadium} alt='stadium' />
                        <p>{type.stadium}</p>
                    </div>
                </div>
        })

        console.log(sports)
        

    const cricketEle = sports.cricket.map(type => {
        return <div className="skeleton content">
                    <h3>{type.tournament}</h3>
                    <p>{type.match}</p>
                    <div className='sub'>
                        <img src={stadium} alt='stadium' />
                        <p>{type.stadium}</p>
                    </div>
                </div>
    })

    function Toggle(){
        if (football && !cricket){
            setCricket(!cricket)
            setFootball(!football)   
        }else if (!football && cricket){
            setCricket(!cricket)
            setFootball(!football) 
        }
    }

  return (
    <div className='sports-main'>
        <div className='sports-type'>
            <button className="selected" onClick={Toggle}>Football</button>
            <button onClick={Toggle}>Cricket</button>
        </div>
        {sports && football && footballEle}
        {sports && cricket && cricketEle}
        
    </div>
  )
}

export default Sports