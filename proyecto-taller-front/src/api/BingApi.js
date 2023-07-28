import axios from 'axios';

const BingApi = async (terminoBusqueda) => {

  const apiKey = import.meta.env.VITE_BING_KEY;
  const query = terminoBusqueda; 

    axios.defaults.headers.get['Ocp-Apim-Subscription-Key'] = apiKey;
    const config = {
      headers: {
        'Ocp-Apim-Subscription-Key': apiKey
      },
    };

    const data = {
      q: query,
      count: 10,        // Número de noticias a devolver
      mkt: 'es-CL',     // Mercado de Chile
      freshness: 'Day'  // Noticias recientes del día
    }

    const url = import.meta.env.VITE_BING_URL + "search?q=" + data.q + '&count=' + data.count + '&mkt=' + data.mkt + '&freshness=' + data.freshness;
   
  try {
    const response = await axios.get(url, config);
    const dataFromResponse = response.data;
    const items = dataFromResponse;
    return items;
  } catch (error) {
    console.error('Error al obtener los datos de tt:', error);
    return [];
  }
};


export default BingApi;

