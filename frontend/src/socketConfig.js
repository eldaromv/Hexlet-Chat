const getSocketURL = () => {
  if (process.env.NODE_ENV === 'production') {
    return undefined;
  }

  return 'http://localhost:3000';
};

export default getSocketURL;
