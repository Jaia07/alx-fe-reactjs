import React from "react"
import { Routes, Route } from "react-router-dom"
import Search from "./components/Search"
import WeatherDisplay from "./components/WeatherDisplay"

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Search />}/>
        <Route path="/weather" element={<WeatherDisplay />}/>
      </Routes>
      
    </>
  )
}

export default App
