import { io } from 'socket.io-client';

const URL = process.env.SOCKET_URL;
const socket = io(URL);

export default socket;
