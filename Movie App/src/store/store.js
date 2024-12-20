import { configureStore } from '@reduxjs/toolkit'
import moviedbReducer from './moviedbSlice'

export const store = configureStore({
  reducer: {
    moviedbData : moviedbReducer,
  },
})
