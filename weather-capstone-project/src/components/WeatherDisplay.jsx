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
        <div className="bg-cover bg-center h-screen flex flex-col"
            style={{backgroundImage: `url(${displayBackgroundImage})`}}
        >
            <header className="bg-[#54aeee] flex justify-between w-full items-center py-1">
                <div className="text-[#1e1e1e] text-3xl font-bold ml-5">
                    <h1>Aura Weather App</h1>
                </div>
                <div onClick={ handleBackToSearch } className="hover:bg-purple-700 rounded-full bg-[#1e1e1e] w-15 p-5 text-center mr-5 cursor-pointer transition duration-300 ease-in-out">
                    <img src={searchIcon} alt="Search Icon" className="filter invert brightness-900"/>
                </div>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center w-full">
                <section className="text-white">
                    <div>
                        <p className="text-[40px] text-center">{ cityName }</p>
                        <p className="text-[80px] leading-11 text-center">{ temperature }°c</p>
                        <div className="flex justify-center">
                            <img src={ weatherIconUrl } alt={ weatherDescription } className="w-15 my-1 text-center" />
                        </div>
                        <span className="block font-bold text-3xl text-center capitalize">{ weatherDescription }</span>
                    </div>
                    
                    <div className="flex gap-10 md:gap-16 mt-6 justify-center">
                        <div className="flex items-start">
                            <img src={humidityIcon} alt="Humidity icon" className="w-6 mr-2 mt-2"/>
                            <div>
                                <span className="text-xl">{ humidity }%</span>
                                <p>Humidity</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <img src={windIcon} alt="Wind icon" className="w-6 mr-2 mt-2"/>
                            <div>
                                <span className="text-xl">{ windSpeed }</span>
                                <p>Wind speed</p>
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