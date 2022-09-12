import React from 'react';


function search({city, selectCity, tempCity, submit}) {
    /*function selectCity(event){
        console.log(event.target.value)
      }*/
      //console.log(city)
  return (
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
  )
}

export default search