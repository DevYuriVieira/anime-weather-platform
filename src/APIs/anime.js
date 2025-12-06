const BASE_URL = "https://api.jikan.moe/v4";

// Mapeando Clima -> Gênero de Anime (ID do MyAnimeList)
// Clear (Sol) -> Adventure (2)
// Rain (Chuva) -> Drama (8) ou Mystery (7)
// Clouds (Nublado) -> Slice of Life (36)
// Snow (Neve) -> Fantasy (10) ou Romance (22)
const weatherToGenre = {
  Clear: 2,   
  Rain: 8,    
  Clouds: 36, 
  Snow: 22,   
  Thunderstorm: 14, // Horror
  Drizzle: 36,
  Mist: 7,
};

export const getAnimesByWeather = async (weatherCondition) => {
  // Se não achar o clima, usa o padrão (Adventure)
  const genreId = weatherToGenre[weatherCondition] || 1; 
  
  try {
  const response = await fetch(`${BASE_URL}/anime?genres=${genreId}&order_by=popularity&limit=8`);
    const data = await response.json();
    return data.data; // Retorna a lista de animes
  } catch (error) {
    console.error("Erro ao buscar animes:", error);
    return [];
  }
};