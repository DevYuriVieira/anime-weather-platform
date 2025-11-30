import React, { useState } from "react";
import { searchCities, getWeatherData } from "../../APIs/weather";
import { getAnimesByWeather } from "../../APIs/anime";
import styles from "./Dashboard.module.css";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

const Dashboard = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [weather, setWeather] = useState(null);
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(false);

  const [weatherTheme, setWeatherTheme] = useState("default");

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
    setQuery(`${city.name}, ${city.country}`);

    const weatherData = await getWeatherData(city.lat, city.lon);

    if (weatherData) {
      setWeather(weatherData);

      const mainCondition = weatherData.weather[0].main;
      setWeatherTheme(mainCondition); // ex: "Clear", "Rain", "Clouds"

      const animeList = await getAnimesByWeather(mainCondition);
      setAnimes(animeList);
    }
    setLoading(false);
  };

  return (
    <div
      className={`${styles.dashboardPage} ${
        styles[weatherTheme] || ""
      }`}
    >
      <div className={styles.contentContainer}>
        {/* BUSCA */}
        <div className={styles.searchSection}>
          <h1>What's the vibe today?</h1>
          <div className={styles.searchBox}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search for a city..."
              value={query}
              onChange={handleSearch}
            />
          </div>

          {/* Autocomplete */}
          {suggestions.length > 0 && (
            <ul className={styles.suggestionsList}>
              {suggestions.map((city, index) => (
                <li key={index} onClick={() => selectCity(city)}>
                  <FaMapMarkerAlt />
                  <span>
                    <b>{city.name}</b>
                    <span
                      style={{
                        fontSize: "0.85rem",
                        color: "#666",
                        marginLeft: "5px",
                      }}
                    >
                      {city.state ? ` - ${city.state}` : ""}, {city.country}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* LOADING */}
        {loading && (
          <div className={styles.loadingMsg}>
            Analyzing Atmosphere & Searching Database... 📡
          </div>
        )}

        {/* RESULTADOS */}
        {weather && !loading && (
          <div className={styles.resultsGrid}>
            {/* Esquerda: Clima */}
            <div className={styles.weatherCard}>
              <h2>Current Weather</h2>
              <div className={styles.weatherInfo}>
                <img
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                  alt="icon"
                />
                <div className={styles.temp}>
                  {Math.round(weather.main.temp)}°C
                </div>
                <div className={styles.condition}>
                  {weather.weather[0].main}
                </div>
              </div>
            </div>

            {/* Direita: Animes */}
            <div className={styles.animeSection}>
              <h2>Perfect Animes for this weather</h2>
              <div className={styles.animeList}>
                {animes.map((anime) => (
                  <div key={anime.mal_id} className={styles.animeCard}>
                    <div className={styles.imageContainer}>
                      <img
                        src={anime.images.jpg.image_url}
                        alt={anime.title}
                      />
                      <span className={styles.score}>
                        ⭐ {anime.score || "N/A"}
                      </span>
                    </div>

                    <div className={styles.animeInfo}>
                      <h3>{anime.title}</h3>

                      <div className={styles.genres}>
                        {anime.genres &&
                          anime.genres.slice(0, 3).map((g) => (
                            <span
                              key={g.mal_id}
                              className={styles.genreTag}
                            >
                              {g.name}
                            </span>
                          ))}
                      </div>

                      <p className={styles.synopsis}>
                        {anime.synopsis
                          ? anime.synopsis.substring(0, 60) + "..."
                          : "No details available."}
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