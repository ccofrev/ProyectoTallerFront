import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BingApi() {
  const [data, setData] = useState(null);

  const apiKey = import.meta.env.VITE_BING_KEY; // Reemplaza con tu propia API key de Bing
  // const query = 'Giorgio Jackson'; 
  const query = busqueda; 

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

    const url = import.meta.env.VITE_BING_URL + "search?q=" + data.q + '&count=' + data.count + '&mkt=' + data.mkt + '&freshness=' + data.freshness;
   
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

