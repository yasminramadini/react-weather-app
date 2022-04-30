import React, { useState, useEffect } from 'react'
import Start from "./Start.jsx"
import Detail from "./Detail.jsx"
import './App.css'

const APP_ID = "aac7447669b7056fe59b96eeb23b993a"

function App() {
  const [weather, setWeather] = useState()
  const [location, setLocation] = useState()
  let [isTheWeatherKnown, setIsTheWeatherKnown] = useState(false)
  const [locationError, setLocationError] = useState()
  
  function backToStart() {
    setIsTheWeatherKnown(false)
    setWeather()
  }
  
  useEffect(() => {
    if(location != null) {
      let response = ""
      let data = ""
      if(typeof location == "object") {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location[0]}&lon=${location[1]}&appid=${APP_ID}&units=metric`)
        .then(res => res.json())
        .then(data => {
          setWeather(data)
          setIsTheWeatherKnown(true)
          setLocationError()
        }) 
      } else {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APP_ID}&units=metric`)
        .then(res => res.json())
        .then(data => {
          if(data.cod == 404) {
            setLocationError({message: "City not found"})
            setIsTheWeatherKnown(false)
            return false
          }
          setWeather(data)
          setIsTheWeatherKnown(true)
          setLocationError()
        }) 
      }
    }
  }, [location]) 
  
  function handleChangeLocation(loc) {
    setLocation(loc)
  }
  
  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(successGetCurrentLocation, errorGetCurrentLocation)
  }
  
  function successGetCurrentLocation(pos) {
    const coord = pos.coords
    const latitude = coord.latitude
    const longitude = coord.longitude
    setLocation([latitude, longitude])
  }
  
  function errorGetCurrentLocation() {
    setLocationError({message: "Please allow the browser to get your coordinate"})
    setIsTheWeatherKnown(false)
  }
  
  return (
    <>
      {isTheWeatherKnown && locationError == null ? <Detail weather={weather} backToStart={backToStart} /> : <Start handleChangeLocation={handleChangeLocation} locationError={locationError} getCurrentLocation={getCurrentLocation} />}
    </>
  )
}

export default App
