import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BingApi() {
  const [data, setData] = useState(null);

  const apiKey = 'a5dcfb4a98cc46a099363d57918c55f4'; // Reemplaza con tu propia API key de Bing
  const query = 'Giorgio Jackson'; // Palabra clave para buscar noticias, puedes cambiarla según lo que desees buscar
  


  useEffect(() => {
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

    const url = "https://api.bing.microsoft.com/v7.0/news/search?q=" + data.q + '&count=' + data.count + '&mkt=' + data.mkt + '&freshness=' + data.freshness;
   
    axios.get(url, config)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.value.map((item,index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

export default BingApi;

