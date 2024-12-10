import { useState } from 'react'
import './App.css'

const api = {
  key: "f77b2eac642bbef8be0323404d70386f",
  base: "https://api.openweathermap.org/data/3.0/",
};

function App() {
  const [search, setSearch] = useState("");

  const searchPressed = () => {
    fetch('${api.base}weather?q=${search}&units=metric&APPID=${api.key}')
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
    });
  };
  return (
    <div className="App">
      <header className='App-header'>
        {/* HEADER */}
      <h1>Weather App</h1>

      {/* Search Box */}
      <div>
        <input 
          type="text" 
          placeholder='Enter city/town'
          onChange={(e) => setSearch(e.target.value)} 
        />
        <button onClick={searchPressed}>Search</button>
      </div>
      {/* Location */}
      <p>New York City, USA</p>
      {/* Temperature F/C */}
      <p>32 °C</p>
      {/* Condition (Sunny) */}
      <p>Sunny</p>
      </header>
    </div>    
  )
}

export default App
