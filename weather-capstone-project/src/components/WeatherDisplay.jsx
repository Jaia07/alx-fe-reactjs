import React from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import displayBackgroundImage from "../assets/images/background-image-2.jpg"
import searchIcon from "../assets/images/search.png"
import Footer from "./navigation/Footer";
import windIcon from "../assets/images/wind.png"
import humidityIcon from "../assets/images/humidity.png"

// Base URL for OpenWeatherMap icons
const WEATHER_ICON_URL = 'https://openweathermap.org/img/wn/';

const WeatherDisplay = () => {

    const location = useLocation();
    const navigate = useNavigate();
    
    // Get the weatherData from the state passed during navigation
    const weatherData = location.state?.weatherData;

    if (!weatherData) {
        // Redirect user back to search page
        return <Navigate to="/" replace />;
    }

    // Extracting data

    const cityName = weatherData.name;
    const temperature = Math.round(weatherData.main.temp);
    const weatherDescription = weatherData.weather[0].description;
    const weatherIcon = weatherData.weather[0].icon;
    const humidity = weatherData.main.humidity;
    const windSpeed = weatherData.wind.speed;

    //Url to get weatherIcon image
    const weatherIconUrl = `${WEATHER_ICON_URL}${weatherIcon}@2x.png`;

    // function to navigate back to the search page
    const handleBackToSearch = () => {
        navigate('/'); 
    }

    return (
        <div className="bg-cover bg-center min-h-screen flex flex-col"
            style={{backgroundImage: `url(${displayBackgroundImage})`}}
        >
            <header className="bg-[#54aeee] flex justify-between w-full items-center py-3 px-4">
                <div className="text-[#1e1e1e] text-xl sm:text-2xl md:text-3xl font-bold">
                    <h1>Aura Weather App</h1>
                </div>
                <div onClick={ handleBackToSearch } className="hover:bg-purple-700 rounded-full bg-[#1e1e1e] w-15 p-3 text-center mr-5 cursor-pointer transition duration-300 ease-in-out">
                    <img src={searchIcon} alt="Search Icon" className="w-5 h-5 filter invert brightness-900"/>
                </div>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center w-full p-4">
                <section className="text-white bg-black/60 p-6 rounded-lg shadow-xl w-full max-w-md text-center">
                    <div>
                        <p className="text-3xl sm:text-4xl font-semibold">{ cityName }</p>
                        <p className="text-6xl sm:text-7xl md:text-8xl font:bold my-2 leading-tight">{ temperature }°c</p>
                        <div className="flex justify-center">
                            <img src={ weatherIconUrl } alt={ weatherDescription } className="w-16 h-16 sm:w-20 sm:h-20" />
                        </div>
                        <span className="block font-medium text-xl sm:text-2xl capitalize">{ weatherDescription }</span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mt-6 justify-center items-center">
                        <div className="flex items-start">
                            <img src={humidityIcon} alt="Humidity icon" className="w-6 h-6 mr-2"/>
                            <div>
                                <span className="text-lg sm:text-xl font-semibold block">{ humidity } %</span>
                                <p className="text-xs sm:text-sm">Humidity</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <img src={windIcon} alt="Wind icon" className="w-6 h-6 mr-2"/>
                            <div>
                                <span className="text-lg sm:text-xl font-semibold block">{ windSpeed } Km/h</span>
                                <p className="text-xs sm:text-sm">Wind speed</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            
            <Footer />
        </div>
    )
}

export default WeatherDisplay;