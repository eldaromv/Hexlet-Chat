const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

app.use(cors({
  origin: "https://frontend-project-12-1-hi9m.onrender.com",
  methods: ["GET", "POST"]
}));

const io = new Server(server, {
  cors: {
    origin: "https://frontend-project-12-1-hi9m.onrender.com",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  socket.on('disconnect', () => {});
  socket.on('exampleEvent', (data) => {
    socket.emit('responseEvent', { message: 'Data received' });
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {});
