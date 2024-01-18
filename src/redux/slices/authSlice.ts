import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: '',
    accessToken: '',
  },
  reducers: {
    login: (state, action) => {
      const {email, accessToken} = action.payload;
      state.email = email;
      state.accessToken = accessToken;
    },
    logout: (state, action) => {
      state.email = '';
      state.accessToken = '';
    },
  },
});

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;
