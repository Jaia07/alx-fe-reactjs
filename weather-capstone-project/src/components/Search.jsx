import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/images/background-image.jpg"
import Footer from "./navigation/Footer";

    const API_KEY = import.meta.env.VITE_WEATHER_APP_ID;

const Search = () => {
    
    const [ city, setCity ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const navigate = useNavigate();

    const handleSearch = async (event) => {
        event.preventDefault();
        if(!city.trim()) {
            setError('Please enter a city name.')
            return;
        }
        setLoading(true)
        setError(null)
    
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
            const response = await fetch(url);

            if (!response.ok) {
                const errorData = await response.json();
                // Throw an error to be caught by the catch block
                throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
            }

            // Then Navigate to the WeatherDisplay page and pass the data
            const weatherData = await response.json();
            navigate('/weather', { state: { weatherData } })

        } catch (error) {
            console.error("Failed to fetch the weather data:", error)
            setError(error.message);
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="bg-cover bg-center min-h-screen flex flex-col items-center"
            style={{backgroundImage: `url(${backgroundImage})`}}
        >
            <div className="w-full bg-[#54aeee] text-center py-4">
                <h1 className="text-[#1e1e1e] text-2xl md:text-3xl font-bold">Aura Weather App</h1>
            </div>
            <div className="flex flex-col items-center justify-center flex-grow w-full px-4 text-center">
                <p className="text-white mt-6 mb-4 text-lg md:text-xl">Welcome Back !!!</p>

                <form className="w-full max-w-lg mt-4" onSubmit={ handleSearch }>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                        <input
                            type="text"
                            id="city_name"
                            name="city_name"
                            placeholder="Enter city name ..."
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="w-full sm:w-auto shadow appearance-none border rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-4"
                        />
                        <button
                            type="submit"
                            className="w-full sm:w-auto cursor-pointer bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                            disabled={loading}
                        >
                            {loading ? 'Fetching requested information...' : 'Search'}
                        </button>
                    </div>
                    {error && <p className="text-red-500 bg-white/80 p-2 rounded mt-4 text-sm">{error}</p>}
                </form>
            </div>

            <Footer />
        </div>
    )
}

export default Search;