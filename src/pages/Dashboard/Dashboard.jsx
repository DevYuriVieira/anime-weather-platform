import React, { useState } from 'react';
import { searchCities, getWeatherData } from '../../APIs/weather';
import { getAnimesByWeather } from '../../APIs/anime';
import './Dashboard.css';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';

const Dashboard = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [weather, setWeather] = useState(null);
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const [weatherTheme, setWeatherTheme] = useState('default');

  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.length > 2) {
      const cities = await searchCities(value);
      setSuggestions(cities);
    } else {
      setSuggestions([]);
    }
  };

  const selectCity = async (city) => {
    setLoading(true);
    setSuggestions([]);
    // Preenche o input com Nome e País pra ficar bonito
    setQuery(`${city.name}, ${city.country}`);

    // 1. Pega Clima
    const weatherData = await getWeatherData(city.lat, city.lon);
    
    if (weatherData) {
      setWeather(weatherData);
      
      const mainCondition = weatherData.weather[0].main;
      setWeatherTheme(mainCondition); 

      // 2. Pega Animes
      const animeList = await getAnimesByWeather(mainCondition);
      setAnimes(animeList);
    }
    setLoading(false);
  };

  return (
    <div className={`dashboard-page ${weatherTheme}`}>
      <div className="content-container">
        
        {/* BUSCA */}
        <div className="search-section">
          <h1>What's the vibe today?</h1>
          <div className="search-box">
            <FaSearch className="search-icon"/>
            <input 
              type="text" 
              placeholder="Search for a city..." 
              value={query}
              onChange={handleSearch}
            />
          </div>
          
          {/* Autocomplete Otimizado (Com Estado e País) */}
          {suggestions.length > 0 && (
            <ul className="suggestions-list">
              {suggestions.map((city, index) => (
                <li key={index} onClick={() => selectCity(city)}>
                  <FaMapMarkerAlt /> 
                  <span>
                    <b>{city.name}</b>
                    <span style={{ fontSize: '0.85rem', color: '#666', marginLeft: '5px' }}>
                      {/* Lógica: Se tiver estado, mostra. Se não, só o país */}
                      {city.state ? ` - ${city.state}` : ''}, {city.country}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* LOADING */}
        {loading && <div className="loading-msg">Analyzing Atmosphere & Searching Database... 📡</div>}

        {/* RESULTADOS */}
        {weather && !loading && (
          <div className="results-grid">
            
            {/* Esquerda: Clima */}
            <div className="weather-card">
              <h2>Current Weather</h2>
              <div className="weather-info">
                <img 
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} 
                  alt="icon" 
                />
                <div className="temp">{Math.round(weather.main.temp)}°C</div>
                <div className="condition">{weather.weather[0].main}</div>
              </div>
            </div>

            {/* Direita: Animes */}
            <div className="anime-section">
              <h2>Perfect Animes for this weather</h2>
              <div className="anime-list">
                {animes.map((anime) => (
                  <div key={anime.mal_id} className="anime-card">
                    
                    <div className="image-container">
                       <img src={anime.images.jpg.image_url} alt={anime.title} />
                       <span className="score">⭐ {anime.score || 'N/A'}</span>
                    </div>

                    <div className="anime-info">
                      <h3>{anime.title}</h3>
                      
                      <div className="genres">
                        {anime.genres && anime.genres.slice(0, 3).map((g) => (
                          <span key={g.mal_id} className="genre-tag">{g.name}</span>
                        ))}
                      </div>
                      
                      <p className="synopsis">
                        {anime.synopsis ? anime.synopsis.substring(0, 60) + '...' : 'No details available.'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;