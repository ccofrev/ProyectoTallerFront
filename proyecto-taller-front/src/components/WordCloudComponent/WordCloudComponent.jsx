import React, { useState } from 'react';
import axios from 'axios';

// Función para generar el wordcloud utilizando quickchart.io
const generateWordCloud = async (texto) => {
  try {
    // Realiza una solicitud POST a la API de quickchart.io
    const response = await axios.post('https://quickchart.io/wordcloud', {
      text: texto,
    });

    console.log(response)
    // La respuesta contendrá la URL de la imagen del wordcloud generada
    return response.data;
  } catch (error) {
    console.error('Error al generar el wordcloud:', error.message);
    return null;
  }
};

const WordCloudComponent = (texto) => {
  const [wordCloudSvg, setWordCloud] = useState('');

  const handleGenerateWordCloud = async () => {
    //   const text = 'Aquí va el texto para generar el wordcloud'; // Reemplaza con el texto deseado
      const text = texto; // Reemplaza con el texto deseado
      
    // Llama a la función para generar el wordcloud
    const wordCloudSvg = await generateWordCloud(text);

    // Actualiza el estado con la URL de la imagen generada
    setWordCloud(wordCloudSvg);
    console.log(wordCloudSvg)
  };

  return (
    <div>
      <button onClick={handleGenerateWordCloud}>Generar Wordcloud</button>
      {wordCloudSvg && <div dangerouslySetInnerHTML={{ __html: wordCloudSvg }} />}
    </div>
  );
};

export default WordCloudComponent;
