import React, { useEffect, useState } from 'react';
import './aqi.css'

function Aqi({aqiData}) {
    const [aqi, setAqi] = useState(Math.round(aqiData.pm10))

    useEffect(() => {
        setDial()
    },[aqi])

    function setDial(){
        let angle = getAqiDialAngle();
        let [bg, white] = getAQIColor();

        let meter = document.querySelector(".gauge > div[role=meter]");
        let dial = meter.querySelector(".dial");
        meter.setAttribute("aria-valuenow", aqi);
        meter.setAttribute("aria-valuetext", aqi);
        dial.querySelector(".aqi-num").textContent = aqi;
        dial.querySelector(".arrow").style.transform = `rotate(${angle - 90}deg)`;
        dial.style.backgroundColor = bg;
        dial.classList.toggle("white", white);
    }

    function getAqiDialAngle(){
        if (aqi >= 301) {
            return Math.min((aqi - 301) / 200 * 30 + 150, 180);
        }else if (aqi >= 201){
            return (aqi - 201) / 100 * 30 + 120;
        }else if (aqi >= 151){
            return (aqi - 101) / 50 * 30 + 60;
        }else if (aqi >= 51) {
            return (aqi - 51) / 50 * 30 + 30;
        }else if (aqi >= 0) {
            return aqi / 50 * 30;
        }else {
            return 0;
        }
    }

    function getAQIColor() {
        function combineColors(c1, c2, bias) {
          return c1.map((c, i) => ((c * (1 - bias)) + (c2[i] * bias)));
        }
      
        function stringifyColor(c) {
          return `rgb(${c})`;
        }
      
        function calculateColors(c1, c2, bias) {
          let bg = combineColors(c1, c2, bias);
          let white = ((bg[0] * 299) + (bg[1] * 587) + (bg[2] * 114)) / 1000 < 128;
          return [stringifyColor(bg), white];
        }
      
        const aqiColorMap = [
          [0, [0, 255, 0]],
          [50, [255, 255, 0]],
          [100, [255, 126, 0]],
          [150, [255, 0, 0]],
          [200, [143, 63, 151]],
          [300, [126, 0, 35]]
        ];
      
        for (let i in aqiColorMap) {
          let [target, color] = aqiColorMap[i];
          if (target > aqi) {
            if (i == 0) {
              return calculateColors(color, color, 1);
            }
      
            let [prevTarget, prevColor] = aqiColorMap[i - 1];
            return calculateColors(prevColor, color, (aqi - prevTarget) / (target - prevTarget));
          }
        }
      
        let [, color] = aqiColorMap[aqiColorMap.length - 1];
        return calculateColors(color, color, 1);
    }

    console.log(aqi)
  return (
    <div className='aqi-main'>
        <h3>AQI Meter</h3>
        <div className='gauge'>
        <div role="meter" 
            aria-valuemin="0" 
            aria-valuemax="500" 
            aria-labelledby="meter-label">
                <div className='dial'>
                    <div className='arrow'></div>
                    <span className='aqi-num'></span>
                    <span className='aqi-text'>PM10</span>
                </div>

        </div>
    </div>
    </div>
  )

}

export default Aqi