import { useState,useEffect } from 'react'
import Card from './compoents/Card'
import input from './compoents/input'
import Button from './compoents/Button'
import "./App.css" 
import { useWeather } from './context/Weather'

function App() {
  
 
  const weather=useWeather();
  console.log(weather);
  useEffect(() => {
    // Get Current Location
    weather.fetchCurrentUserLocationData();
  }, []);


  return (
    <>
      <div>
        <h1>Weather Forecast App</h1>
        <input placeholder='Enter city name' />
        <Button onClick={weather.fetchData} value="Search"/>
        <Card />
        <Button value="Refresh"/>
      
      </div>
    </>
  )
}

export default App
