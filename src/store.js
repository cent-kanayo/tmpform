import { configureStore } from '@reduxjs/toolkit';
import countSlice from './feature/countSlice';
import movieSlice from './feature/movieSlice';

export const store = configureStore({
  reducer: {
    counter: countSlice,
    movies: movieSlice,
  },
});
