import React, { useState } from 'react';
import TrendingApi from '../../api/TrendingApi';
import TrendingTopics from '../../api/TrendingApi';
import TrendingApiComp from '../ApiComponents/TrendingApiComp';

const LayoutComponent = () => {
  const [sharedDataTrend, setSharedDataTrend] = useState([]);

  // Función para recibir los datos desde TrendingApi
  const handleDataFetchedTrend = (data) => {
    setSharedDataTrend(data); // Almacenar los datos en el estado
  };

  return (
    <div>
      <h1>Layout</h1>
      {/* Pasar la función handleDataFetched como prop a TrendingApi */}
      <TrendingApi onDataFetched={handleDataFetchedTrend} />
      {/* Pasar los datos compartidos como props a los componentes hijos */}
      <TrendingApiComp data={sharedDataTrend} />

    </div>
  );
};

export default LayoutComponent;
