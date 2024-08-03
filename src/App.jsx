import { useState } from 'react'
import Card from './compoents/Card'
import input from './compoents/input'
import Button from './compoents/Button'
import "./App.css" 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Weather Forecast App</h1>
        <input placeholder='Enter city name' />
        <Button value="Search"/>
        <Card />
        <Button value="Refresh"/>
      
      </div>
    </>
  )
}

export default App
