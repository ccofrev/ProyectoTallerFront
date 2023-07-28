import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrendingApiComponent = ({ onDataFetched }) => {
  const [trendingData, setTrendingData] = useState([]);
  const [trendingDataNow, setTrendingDataNow] = useState([]);

  useEffect(() => {
    const fetchTrendingData = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_TT_DIARIO_URL);
        const dataFromResponse = response.data.description;
        const descriptions = dataFromResponse.map((item) => item);
        setTrendingData(descriptions);
        onDataFetched && onDataFetched(descriptions); 
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }

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

  // return null;
  return (
    <div>
      <h2>TT Chile Ahora</h2>
      <ul>
        {trendingDataNow.map((tt,index) => (
          <li key={'now'+index}>
              <strong>{tt['name']}</strong> &nbsp; <strong>{tt['Tweet Count']}</strong>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default TrendingApiComponent;
