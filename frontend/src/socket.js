import { io } from 'socket.io-client';

const URL = process.env.NODE_ENV === 'production'
  ? process.env.RENDER_INTERNAL_URL || window.location.origin
  : 'http://localhost:3000';

const socket = io(URL);

export default socket;
