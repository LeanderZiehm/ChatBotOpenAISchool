import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import { Configuration, OpenAIApi } from 'openai'

dotenv.config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express()
app.use(cors())
//app.use(express.json())

app.get('/', async (req, res) => {

  const prompt = "🤣";

  const response = await openai.createCompletion({
    model: "text-ada-001",
    prompt: `${prompt}`,
    temperature: 1, // Higher values means the model will take more risks.
    max_tokens: 5, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
    top_p: 1, // alternative to sampling with temperature, called nucleus sampling
    frequency_penalty: 0.5, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
    presence_penalty: 0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
  });


  res.send(response.data.choices[0].text)
})

app.listen(5000, () => console.log('AI server started on http://localhost:5000'))