import { io } from 'socket.io-client';
import { SOCKET_IO_URL } from './config';

const socket = io(SOCKET_IO_URL);

export default socket;
