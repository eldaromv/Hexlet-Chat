// config.js
export const SOCKET_IO_URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:3000';