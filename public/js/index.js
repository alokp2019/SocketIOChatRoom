let socket = io();

socket.on('connect', ()=>{
	console.log('connected to the server')
});

socket.on('disconnect', ()=>{
	console.log('unable to connect to the server')
})
