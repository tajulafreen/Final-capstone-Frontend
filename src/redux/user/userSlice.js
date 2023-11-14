import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const signUpUser = createAsyncThunk('user/signUp', async (userData) => {
  try {
    const response = await axios.post('http://localhost:3000/sign_up', userData);
    alert('User Created Successfully');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});
export const signInUser = createAsyncThunk('user/signIn', async (userData) => {
  try {
    const response = await axios.post('http://localhost:3000/login', userData);

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error('Invalid email or password. Please try again.');
    } else {
      throw new Error('An unexpected error occurred. Please try again later.');
    }
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: { user: null, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log(action.payload.status.data.id);
        state.user = action.payload.status.data.id;
        localStorage.setItem('user_id', JSON.stringify(action.payload.status.data.id));
      })
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.status = 'loading';
        },
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        },
      );
  },
});
export const selectUser = (state) => state.user.user;
export const selectStatus = (state) => state.user.status;
export const selectError = (state) => state.user.error;

export default userSlice.reducer;
