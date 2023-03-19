import { Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv";
import { Server } from 'socket.io';
import express from 'express';
import { createServer } from 'http';

const app = express(); 
const server = createServer(app); 
const io = new Server(server);

const PORT = 3000 || process.env.PORT;
//const io = socketio(server);//3000, {cors: {origin: '*',}}


dotenv.config();
//console.log(process.env.OPENAI_API_KEY)
const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


app.use(express.static('public'));//displays the index.html file in the public folder

io.on('connection', socket => {
	//console.log('New user connected ' + socket.id);
	//console.log(socket.handshake.address);	//get users ip adress and print it
	socket.emit('serverResponse', 'Hello Human');

	// socket.on('clientRequest', message => {
	// 	socket.emit('serverResponse', message);
	// });

	socket.on('clientRequest', async message => {
	
		  const prompt = message;

		  const response = await openai.createCompletion({
			model: "text-ada-001",
			prompt: `${prompt}`,
			temperature: 1, // Higher values means the model will take more risks.
			max_tokens: 10, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
			top_p: 1, // alternative to sampling with temperature, called nucleus sampling
			frequency_penalty: 0.5, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
			presence_penalty: 0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
		  });
		
		  socket.emit('serverResponse', response.data.choices[0].text);
	
	  });
	
  });	
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));