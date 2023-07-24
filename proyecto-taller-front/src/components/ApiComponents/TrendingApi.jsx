import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TrendingApi() {

  const [data, setData] = useState(null);
  const URL = import.meta.env.VITE_TREND_URL

  useEffect(() => {
    axios.get(URL)
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
          {data.description.map((item,index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

export default TrendingApi;