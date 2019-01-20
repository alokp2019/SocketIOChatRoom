const path = require('path');
const express = require('express');
const http = require('http');
const app = express();
const socketIO = require('socket.io')

const publicPath = path.join(__dirname , '/public');
const port = process.env.PORT || 5000;
const server = http.createServer(app);

let io = socketIO(server);
io.on('connection', (socket)=>{
	console.log('new user connected')

 socket.on('disconnect', ()=>{
 	console.log('user was disconnected')
 });


})




app.use(express.static(publicPath));

server.listen(port, ()=>{
	console.log(`The Server is running on the port ${port}`);
})