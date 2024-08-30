import { io } from 'socket.io-client';

const URL = process.env.NODE_ENV === 'production' ? undefined : '/';
const socket = io(URL);

export default socket;
