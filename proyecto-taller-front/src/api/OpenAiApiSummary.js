import axios from 'axios';

const OpenAiApiSummary = async (conceptos, topics) => {

  const apiKey = import.meta.env.VITE_OPENAI_KEY
  const endpoint = import.meta.env.VITE_OPENAI_URL

  const PROMPT = `A continuacion va una lista de noticias con sus titulos y con una breve reseña, separados con ';' todos deberían relacionarse a un mismo tema. Intenta resumir todas las noticias en un solo texto, definiendo un titular y escribiendo un pequeño resumen. Si alguna de las noticias de la lista parece ser muy distinta, omitela. El contexto tiene que ver con Chile y temas de actualidad. ${conceptos}. Prioriza los temas relacionados con los temas en la siguiente lista: ${topics}`
  // const PROMPT = 'cuanto es tres por tres'
  const MAX_TOKENS = 200

  const data = {
    model: 'gpt-3.5-turbo',
    messages: [{"role": "user", "content": PROMPT}],
    temperature: 0.5,
    max_tokens: MAX_TOKENS
  };

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  };

  try {
    const response = await axios.post(endpoint, data, { headers });
    const dataFromResponse = response.data;
    const items = dataFromResponse;
    return items;
  } catch (error) {
    console.error('Error al obtener los datos de resumen:', error);
    return [];
  }

  // axios.post(endpoint, data, { headers })
  //   .then(response => {
  //     console.log(response.data.choices[0].message.content);
  //     return response.data
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //     return []
  //   });

}
export default OpenAiApiSummary;