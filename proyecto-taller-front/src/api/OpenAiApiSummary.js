import axios from 'axios';


function OpenAiApi(conceptos) {

  const apiKey = import.meta.env.VITE_OPENAI_KEY
  const endpoint = import.meta.env.VITE_OPENAI_URL

  const PROMPT = `A continuacion va una lista de noticias con sus titulos y con una breve reseña ${conceptos}, todos deberían relacionarse a un mismo tema. Intenta resumir, definiendo un titular y escribiendo un pequeño resumen. Si alguna de las noticias de la lista parece ser muy distinta, omitela en tu analisis.`
  const MAX_TOKENS = 200

  axios.post(endpoint, {
    prompt: PROMPT,
    max_tokens: MAX_TOKENS // Cantidad máxima de tokens en la respuesta generada
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    }
  })
    .then(response => {
      return response.data.choices;
    })
    .catch(error => {
      console.error(error);
      return [];
    });
  };

export default OpenAiApi;