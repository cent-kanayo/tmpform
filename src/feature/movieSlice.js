import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (url, thunkApi) => {
    try {
      const { data } = await axios.get(url);
      return data.Search;
    } catch (error) {
      return thunkApi.rejectWithValue(
        'Oops! Something went wrong, please try again'
      );
    }
  }
);

export const fetchNewMovie = createAsyncThunk(
  'movies/fetchNewMovie',
  async (url, thunkApi) => {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        'Oops! Something went wrong, please try again'
      );
    }
  }
);

const initialState = {
  loading: false,
  error: false,
  errMsg: '',
  data: [],
  newData: {},
};
const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMovies.pending]: (state) => {
      state.loading = true;
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [fetchMovies.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.errMsg = action.payload;
    },
    [fetchNewMovie.fulfilled]: (state, action) => {
      state.newData = action.payload;
    },
  },
});

export default movieSlice.reducer;
