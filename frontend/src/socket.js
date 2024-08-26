import { io } from 'socket.io-client';

const url = 'http://localhost:3000';
const URL = process.env.NODE_ENV === 'production' ? undefined : url;
const socket = io(URL);

export default socket;
