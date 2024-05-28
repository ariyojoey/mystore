import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const baseUrl = 'http://localhost:5000'





// Async thunk for user sign up
export const signUpUser = createAsyncThunk(
  'user/signUpUser',
  async ({ email, password, confirmPassword, firstName, lastName }) => {
    try {
      const response = await axios.post(`${baseUrl}/api/auth/sign-up`, { email, password, confirmPassword, firstName, lastName });
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message)
      return console.error('Sign Up Error: ', error);
    }
  }
);




// Async thunk for user sign in
export const signInUser = createAsyncThunk(
  'user/signInUser',
  async ({ email, password }) => {
    try {
      const response = await axios.post(`${baseUrl}/api/auth/sign-in`, { email, password });
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message)
      return console.error('Sign In Error: ', error);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    token: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('userToken');
      window.location.href = '/';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.result;
        state.token = action.payload.token;
        localStorage.setItem('userToken', action.payload.token);
        
        window.location.href = '/';
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(signInUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.result;
        state.token = action.payload.token;
        localStorage.setItem('userToken', action.payload.token);
        
        window.location.href = '/'
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
