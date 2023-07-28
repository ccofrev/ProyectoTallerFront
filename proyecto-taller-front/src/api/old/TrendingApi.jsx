import { useState, useEffect } from 'react';
import axios from 'axios';

const TrendingApi = ({ onDataFetched }) => {
  const [trendingDataNow, setTrendingDataNow] = useState([]);

  useEffect(() => {
    const fetchTrendingData = async () => {

      try {
        const response = await axios.get(import.meta.env.VITE_TT_NOW_URL);
        const dataFromResponse = response.data.itemListElement;
        const items = dataFromResponse.map((item) => item);
        setTrendingDataNow(items);
        onDataFetched && onDataFetched(items);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }

    };
    fetchTrendingData();
  }, []);

  return null
};

export default TrendingApi;
