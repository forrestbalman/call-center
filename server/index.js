import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'

import { handler } from '../build/handler.js'

const port = 8091
const app = express()
const server = createServer(app)

const io = new Server(server)

io.on('connection', (socket) => {
    console.log('a user connected with id: ', socket.id)
})

app.use(handler)

server.listen(port)