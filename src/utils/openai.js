import OpenAI from 'openai';
import { GPT_API_KEY } from './constant';

const openai = new OpenAI({
  apiKey:  GPT_API_KEY,
  dangerouslyAllowBrowser: true  // This is the default and can be omitted
});

export default openai
