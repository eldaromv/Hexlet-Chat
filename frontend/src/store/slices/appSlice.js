import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
  username: localStorage.getItem('nickname') ? localStorage.getItem('nickname') : '',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.token = action.payload.token;
      state.username = action.payload.nickname;
    },
  },
});

export const { setUserData } = appSlice.actions;
export default appSlice.reducer;