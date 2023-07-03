import express from 'express';
import http from 'http'
import cors from 'cors'
import { Server } from 'socket.io';

const app = express()
app.use(cors())
const PORT = 5000

const server = http.createServer(app)
const io = new Server(server)

io.on('connection', (socket) => {
    console.log(socket.id)

    socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id)
    })
})

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))