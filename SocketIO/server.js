const express = require('express');
const app = express();
const server = require('http').createServer(app);
const PORT = 3000 || process.env.PORT;
const io = require('socket.io')(server);//3000, {cors: {origin: '*',}}


app.use(express.static('public'));//displays the index.html file in the public folder





// 


  io.on('connection', socket => {
	//console.log('New user connected ' + socket.id);
	//console.log(socket.handshake.address);	//get users ip adress and print it
	socket.emit('serverResponse', 'Hello Human');

	socket.on('clientRequest', message => {
		//console.log(message);
		socket.emit('serverResponse', message+'🤣');
	});

  });
	
  server.listen(PORT, () => console.log(`Server started on port ${PORT}`));

  
  

// const io = require('socket.io')(3000);

// io.on('connection', socket => {
// 	console.log('New user connected'+socket.id);
// 	// socket.on('send-chat-message', message => {
// 	// 	socket.broadcast.emit('chat-message', { message: message, name: users[socket.id] });
// 	// });
// 	// socket.on('new-user', name => {
// 	// 	users[socket.id] = name;
// 	// 	socket.broadcast.emit('user-connected', name);
// 	// });
// 	// socket.on('disconnect', () => {
// 	// 	socket.broadcast.emit('user-disconnected', users[socket.id]);
// 	// 	delete users[socket.id];
// 	// });
// });