import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ApiComponent() {
  const [data, setData] = useState(null);



  useEffect(() => {
    // axios.get('https://ejemplo.com/api/endpoint')
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=160&offset=0')
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
          {data.results.map((item,index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

export default ApiComponent;