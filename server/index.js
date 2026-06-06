import express from 'express';
import { Server } from "socket.io";
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.static(path.join(__dirname, "public")));

const expressServer = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const io = new Server(expressServer, {
  cors: {
    origin: process.env.NODE_ENV === "production" ? false : ["http://localhost:8080"]
  }
});

io.on('connection', socket => {
  console.log(`User ${socket.id} connected`);

  // Upon connection - send message only to user
  socket.emit('message', "Welcome to the chat!");

  // Upon connection - send message to all others
  socket.broadcast.emit('message', `User ${socket.id.substring(0,5)} connected`);

  // Listening for a message event
  socket.on('message', data => {
    console.log(data);
    io.emit('message', `${socket.id.substring(0,5)}: ${data}`);
  });

  // When user disconnects - send message to all others
  socket.on('disconnect', () => {
    console.log(`User ${socket.id} disconnected`);
    socket.broadcast.emit('message', `User ${socket.id.substring(0,5)} disconnected`);
  });

  // Listening for activity
  socket.on('activity', (name) => {
    socket.broadcast.emit('activity', name);
  });
});