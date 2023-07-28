import axios from 'axios';

const TrendingApi = async () => {

      try {
        const response = await axios.get(import.meta.env.VITE_TT_NOW_URL);
        const dataFromResponse = response.data.itemListElement;
        const items = dataFromResponse.slice(0, 10);
        // const items = JSON.parse(dataFromResponse)
        return items;
      } catch (error) {
        console.error('Error al obtener los datos de tt:', error);
        return [];
      }
    };

export default TrendingApi;
