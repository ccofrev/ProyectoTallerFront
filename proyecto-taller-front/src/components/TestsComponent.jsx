import React, { useState, useEffect } from 'react';
import TrendingApi from '../api/TrendingApi';

function TestsComponent() {
  const [trendingData, setTrendingData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await TrendingApi();
        setTrendingData(data);
      } catch (error) {
        console.log("Error", error)
      }
    }
    fetchData();
  }, []);

  // Renderizar el componente con los datos de la API
  return (
    <div>
      <h1>Lista de elementos de la API</h1>
      {trendingData ? (
        <ul>
          {trendingData.map((tt, index) => (
            <li key={index}>
              <h2>{tt.name}</h2>
            </li>
          ))}
        </ul>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

export default TestsComponent;
