import React, { useState, useEffect } from 'react';
import TrendingApi from '../api/TrendingApi';
import BingApi from '../api/BingApi';
import TrendingItem from '../TrendingItem'
import OpenAiApiSummary from '../api/OpenAiApiSummary'
import loading from '../assets/img/loading.gif'

function procesaHT(str) {
  // Verificar si el string inicia con '#' y eliminarlo
  if (str.startsWith('#')) {
    str = str.substring(1);
  }

  // Agregar espacios antes de cada letra mayúscula que no forme parte de una secuencia
  // y entre un número y una letra
  str = str.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

  return str;
}

function TestComponent() {
  const [trendingData, setTrendingData] = useState(null);
  // const [searchData, setSearchData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const apiData_ = await TrendingApi();
        const apiData = apiData_.slice(0, 10);
        const ttObjects = apiData.map(item => new TrendingItem(item['name'], item['Tweet Count']));
        
        for(const tto of ttObjects){
          const temp1 = await BingApi(procesaHT(tto.name));
          const temp2 = await temp1['value'].map(item => {
            tto.images.push(item.image)
            tto.urls.push(item.url)
            return `TITULO: ${item.name}, DESCRIPCION: ${item.description}`
          }).join('; ')
          const temp3 = await OpenAiApiSummary(temp2, ttObjects.map(tt => {return tt.name}).join(', '))
          tto.summary = temp3.choices[0].message.content
        }

        setTrendingData(ttObjects);

      } catch (error) {
        console.log("Error", error)
      }
    }
    fetchData();
  }, []);

  // Renderizar el componente con los datos de la API
  return (
    <div>
      <h1>TRENDING TOPICS CHILE</h1>
      {trendingData ? (
        <ul>
          {trendingData.map((tt, index) => (
            <li key={index}>
              {tt.images[0] ? (<img src={tt.images[0].thumbnail.contentUrl} alt={tt.name} height="120" />):('')}
              <p><strong>{tt.name}</strong></p>
              <p>{tt.summary}</p>
            </li>
          ))}
        </ul>
      ) : (
        // <p>Cargando datos twitter...</p>
        <img src={loading}/>
      )}
    </div>
  );
}

export default TestComponent;
