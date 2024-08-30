import { io } from 'socket.io-client';
import getSocketURL from './socketConfig';

const URL = getSocketURL();

const socket = io(URL);

export default socket;
