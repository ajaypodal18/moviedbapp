import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieData: [],
  imageBaseUrl: "",
  topRated: [],
  upComing : [],
};

export const moviedbSlice = createSlice({
  name: "moviedb",
  initialState,
  reducers: {
    setMovieData: (state, action) => {
      state.movieData = action.payload;
    },
    setImageBaseUrl: (state, action) => {
      state.imageBaseUrl = action.payload;
    },
    setTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    setUpComing: (state, action) => {
      state.upComing = action.payload;
      },
  },
});

export const { setMovieData, setImageBaseUrl, setTopRated, setUpComing } = moviedbSlice.actions;
export default moviedbSlice.reducer;
