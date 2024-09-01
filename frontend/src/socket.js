import { io } from 'socket.io-client';

const URL = process.env.NODE_ENV === 'production'
  ? 'https://frontend-project-12-1-hi9m.onrender.com'
  : 'http://localhost:3000';
const socket = io(URL);

export default socket;
