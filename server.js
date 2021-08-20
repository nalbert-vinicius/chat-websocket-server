const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const http = require('http').Server(app);

//Habilitar o cors
app.use(cors());
//permitir que a origem do evento venha de qualquer lugar *
const io = require('socket.io')(http, {cors: {origin: '*'}});

io.on('connection', (socket) =>{

    socket.on('room', (data) =>{
        console.log(data)
    })

    socket.on('message', (msg) =>{
        console.log(msg);

        io.emit('message', msg);
    })

    socket.on('disconnect', () =>{
        console.log("Usuário desconectado!")
    })

})


http.listen(port, () =>{
    console.log("Servidor rodando na porta", port)
})