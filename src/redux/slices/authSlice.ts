import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    phoneNumber: '',
    accessToken: '',
  },
  reducers: {
    login: (state, action) => {
      const {phoneNumber, accessToken} = action.payload;
      state.phoneNumber = phoneNumber;
      state.accessToken = accessToken;
    },
    logout: (state, action) => {
      state.phoneNumber = '';
      state.accessToken = '';
    },
  },
});

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;
