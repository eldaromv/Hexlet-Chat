const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());

const users = [
  { username: 'testuser', password: 'testpassword', token: 'sometoken' },
];

app.post('/api/v1/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password,
  );
  if (user) {
    res.json({ token: user.token });
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
});

app.post('/api/v1/signup', (req, res) => {
  const { username, password } = req.body;
  users.push({ username, password, token: 'newtoken' });
  res.status(201).json({ message: 'User registered successfully' });
});

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
