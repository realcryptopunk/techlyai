import { OpenAIApi, Configuration } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  
  const openai = new OpenAIApi(configuration);
  
  export default async (req, res) => {
    if (req.body.prompt !== undefined) {
      const completion = await openai.createCompletion({
         model: "text-curie-001",
         prompt: `${req.body.prompt}`,
         temperature: 0.7,
         max_tokens: 256,
         top_p: 0.47,
         frequency_penalty: 0.33,
         presence_penalty: 0.17,
      });
  
      res.status(200).json({ text: `${completion.data.choices[0].text}` });
    } else {
      res.status(400).json({ text: "No prompt provided." });
    }
  };