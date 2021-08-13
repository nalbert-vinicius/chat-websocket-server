const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const http = require('http').Server(app);

const io = require('socket.io')(http);

io.on('connection', (socket) =>{
    socket.on('message', (msg) =>{
        console.log(msg);

        io.emit('event', msg);
    })
})


http.listen(port, () =>{
    console.log("Servidor rodando na porta", port)
})