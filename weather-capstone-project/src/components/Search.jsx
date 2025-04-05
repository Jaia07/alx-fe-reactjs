import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/images/background-image.jpg"
import Footer from "./navigation/Footer";

    const API_KEY = import.meta.env.VITE_WEATHER_APP_ID;
    console.log("API Key Loaded:", API_KEY);
    console.log("Full import.meta.env:", import.meta.env);

const Search = () => {
    

    const [ city, setCity ] = useState('');
    const navigate = useNavigate();

    const handleSearch = async (event) => {
        event.preventDefault();
        if(!city.trim()) {
            alert('Please enter a city name.')
            return;
        }
    
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
            const response = await fetch(url);
            const weatherData = await response.json();

            if (!response.ok) {
                const errorData = await response.json();
                // Throw an error to be caught by the catch block
                throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
            }

            // Then Navigate to the WeatherDisplay page and pass the data
            navigate('/weather', { state: { weatherData } })
        } catch (error) {
            console.error("Failed to fetch the weather data:", error)
            alert(`Error: ${error.message}`);
        }
    }
    return (
        <div className="bg-cover bg-center h-screen flex flex-col items-center"
            style={{backgroundImage: `url(${backgroundImage})`}}
        >
            <div className="w-full bg-[#54aeee] text-center py-5">
                <h1 className="text-[#1e1e1e] text-3xl font-bold">Aura Weather App</h1>
            </div>
            <div>
                <p className="text-white mt-4 text-lg">Welcome Back !!!</p>
            </div>

            <form className="flex-grow flex justify-center items-center" onSubmit={ handleSearch }>
                <input
                    type="text"
                    id="city_name"
                    name="city_name"
                    placeholder="Enter city name ..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="shadow appearance-none border rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-4"
                />
                <button
                    type="submit"
                    className="cursor-pointer bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                >
                    Search
                </button>
            </form>

            <Footer />
        </div>
    )
}

export default Search;