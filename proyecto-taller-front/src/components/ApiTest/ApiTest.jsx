import React, { useEffect, useState } from 'react';

function ApiTest() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/ability/?limit=20&offset=20')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    }, []);

  return (
    <div>
      {data ? <p>{data}</p> : <p>Cargando datos...</p>}
    </div>
  );
}

export default ApiTest;