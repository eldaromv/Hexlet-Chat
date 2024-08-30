import { createServer } from 'http';
import { Server } from 'socket.io';

const server = createServer();
const io = new Server(server);

io.on('connection', () => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('server started on port 3000');
});
