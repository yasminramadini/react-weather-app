
import DetailRow from "./DetailRow.jsx"
import { FaAngleLeft } from "react-icons/fa"
import { FaMapMarkerAlt } from "react-icons/fa"
import { WiThermometer } from "react-icons/wi"
import { WiRaindrop } from "react-icons/wi"
import { WiStrongWind } from "react-icons/wi"
import { FaUserAlt } from "react-icons/fa"
import Sunny from "./weather-img/sunny.png"
import Cloudy from "./weather-img/cloudy.png"
import Stormy from "./weather-img/stormy.png"
import Rainy from "./weather-img/rainy.png"
import Snow from "./weather-img/snow.png"

function Detail({ weather, backToStart }) {
  function chooseWeatherImg(id) {
    if(id >= 200 && id <= 321) {
      return Stormy
    } else if(id >= 500 && id <= 531) {
      return Rainy
    } else if(id >= 600 && id <= 622) {
      return Snow
    } else if(id >= 701 && id <= 781) {
      return Cloudy
    } else if(id >= 800 && id <= 804) {
      return Sunny
    }
  }
  
  const weatherImg = chooseWeatherImg(weather.weather[0].id)
  console.log(weatherImg)
  
  return (
    <div id="detail">
      <nav><FaAngleLeft onClick={backToStart} /></nav>
      <header>
        <p><FaMapMarkerAlt /> {weather.name}, {weather.sys.country}</p>
        <img src={weatherImg} width="100px" />
        <p>{ weather.weather[0].description }</p>
      </header>
      <main>
        <DetailRow icon={<WiThermometer />} title="Temp" value={`${Math.round(weather.main.temp)}°C`} />
        <DetailRow icon={<WiRaindrop />} title="Humidity" value={`${weather.main.humidity}%`} />
        <DetailRow icon={<WiStrongWind />} title="Wind Speed" value={`${weather.wind.speed}m/s`} />
        <DetailRow icon={<FaUserAlt />} title="Feels like" value={`${Math.round(weather.main.feels_like)}°C`} />
      </main>
    </div>
  )
}

export default Detail