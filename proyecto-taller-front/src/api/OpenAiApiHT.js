import axios from 'axios';


function OpenAiApi(hashtag) {

  const apiKey = import.meta.env.VITE_OPENAI_KEY
  const endpoint = import.meta.env.VITE_OPENAI_URL

  const PROMPT = `entiendes este hashtag chileno ${hashtag}: dame 3 conceptos para buscar noticias en bing, sin incluir el mismo hashtag`
  const MAX_TOKENS = 100

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