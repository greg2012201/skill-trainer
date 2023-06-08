import { Configuration } from 'openai';

const apiKey = import.meta.env.VITE_REACT_APP_OPEN_AI_API_KEY;

const configuration = new Configuration({
  apiKey,
});

export default configuration;
