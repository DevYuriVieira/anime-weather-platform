const API_KEY = import.meta.env.VITE_WEATHER_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";
const GEO_URL = "https://api.openweathermap.org/geo/1.0";

// 1. Busca cidades com filtro de duplicatas
export const searchCities = async (query) => {
  if (!query) return [];
  
  // Aumentei o limit para 10 para ter margem de sobra depois de filtrar
  const url = `${GEO_URL}/direct?q=${query}&limit=10&appid=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Erro na API de Geo");
    const data = await response.json();

    // --- FILTRO DE DUPLICATAS ---
    // Cria um conjunto (Set) para rastrear cidades já adicionadas
    const seen = new Set();
    
    const uniqueCities = data.filter(city => {
      // Cria uma chave única: "Nome-Estado-Pais"
      const duplicateKey = `${city.name}-${city.state}-${city.country}`;
      
      if (seen.has(duplicateKey)) {
        return false; // Se já viu essa chave, ignora (remove duplicata)
      } else {
        seen.add(duplicateKey);
        return true; // Se é nova, mantém
      }
    });

    // Retorna apenas as 5 primeiras únicas
    return uniqueCities.slice(0, 5);

  } catch (error) {
    console.error("Erro ao buscar cidades:", error);
    return [];
  }
};

// 2. Pega o clima
export const getWeatherData = async (lat, lon) => {
  try {
    // Adicionei &lang=pt_br (ou en) se quiser forçar, mas 'en' é o padrão do seu site
    const response = await fetch(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&lang=en&appid=${API_KEY}`);
    if (!response.ok) throw new Error("Erro na API de Clima");
    return await response.json();
  } catch (error) {
    console.error("Erro ao pegar clima:", error);
    return null;
  }
};
