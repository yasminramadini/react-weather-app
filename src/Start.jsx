function Start({ handleChangeLocation, locationError, getCurrentLocation }) {
  function handleInput(e) {
    if(e.keyCode == 13) {
      handleChangeLocation(e.target.value)
    }
  }
  
  return (
    <div id="start">
      <p className="instruction">Type your location name below then click enter</p>
      { locationError != null && <p className="error">{ locationError.message }</p> }
      <input type="text" placeholder="City or region name" onKeyUp={handleInput} />
      <div className="separator">
        <p>OR</p>
      </div>
      <button onClick={getCurrentLocation}>Get Current Location</button>
    </div>
  )
}

export default Start