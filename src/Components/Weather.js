import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  let date = new Date().toLocaleDateString("de-DE");

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d49b27c1cd191d6b57977daecf94aa53`
      );
      setWeather(response.data);
      console.log("response", response.data);
      setError(null); //for clearning previous errors
    } catch (error) {
      setError("Invalid city name. Please try again.");
      setWeather(null); // clear any previous weather data
    }
  };

  return (
    <div className="min-h-screen flex mt-10 ">
      <h1 className="mb-6 text-center text-3xl font-semibold text-black-500">
        Weather App
      </h1>
      <div id="weather-form" className="relative mb-6">
        <label htmlFor="city" className="mb-2 block font-medium text-blue-700">
          {" "}
          Enter City:{" "}
        </label>
        <div className="flex items-center">
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            name="city"
            className="mt-1 block h-12 w-64 rounded-md border border-gray-300 px-4 py-2 placeholder-gray-500 focus:border-blue-500 focus:outline-none"
            placeholder="Enter city name"
          />
          <button
            type="submit"
            onClick={fetchWeather}
            className="ml-1 h-12 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
          >
            Search
          </button>
        </div>
      </div>
      {error && <p>{error}</p>}
      {weather && (
        <div className="min-h-screen flex items-center justify-center">
          <div className="flex flex-col bg-white rounded p-4 w-full max-w-xs">
            <div className="font-bold text-xl">City: {weather.name}</div>
            <div className="text-sm text-gray-500"> Date: {date}</div>
            <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
              <svg
                className="w-32 h-32"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns=""
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                ></path>
              </svg>
            </div>
            <div className="flex flex-row items-center justify-center mt-6">
              <div className="font-medium text-6xl">
                {Math.floor(weather.main.temp - 273.15)}°C
              </div>
              <div className="flex flex-col items-center ml-6">
                <div>Cloudy</div>
                {console.log("weather.main", weather.main)}
                {console.log(
                  "weather.main.description",
                  weather.main.description
                )}
                <div className="mt-1">
                  <span className="text-sm">
                    <i className="far fa-long-arrow-up"></i>
                  </span>
                  <span className="text-sm font-light text-gray-500">{}°C</span>
                </div>
                <div>
                  <span className="text-sm">
                    <i className="far fa-long-arrow-down"></i>
                  </span>
                  <span className="text-sm font-light text-gray-500">{}°C</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between mt-6">
              <div className="flex flex-col items-center">
                <div className="font-medium text-sm">Wind</div>
                <div className="text-sm text-gray-500">
                  {weather.wind.speed} k/h
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-medium text-sm">Humidity</div>
                <div className="text-sm text-gray-500">
                  {weather.main.humidity} %
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-medium text-sm">Visibility</div>
                <div className="text-sm text-gray-500">
                  {weather.main.visibility}km
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
