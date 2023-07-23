import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TrendingApi() {

  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://64.176.195.184/top')
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