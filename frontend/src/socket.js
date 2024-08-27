import { io } from 'socket.io-client';

const URL = process.env.NODE_ENV === 'production' ? `https://${process.env.RENDER_EXTERNAL_URL}` : 'http://localhost:3000';
const socket = io(URL);

export default socket;
