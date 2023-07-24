import React, { useState, useEffect } from 'react';
import axios from 'axios';


const apiKey = import.meta.env.VITE_OPENAI_KEY
const endpoint = import.meta.env.VITE_OPENAI_URL

const hashtag = "#vamosLaU"
const prompt_ = `entiendes este hashtag chileno ${hashtag}: dame 3 conceptos para buscar noticias en bing, sin incluir el mismo hashtag`


function OpenAiApi() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.post(endpoint, {
      prompt: prompt_,
      max_tokens: 100 // Cantidad máxima de tokens en la respuesta generada
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    })
      .then(response => {
        console.log(response.data.choices)
        setData(response.data.choices);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item,index) => (
            <li key={index}>{item.text}</li>
          ))}
        </ul>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

export default OpenAiApi;