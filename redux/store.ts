import { configureStore } from '@reduxjs/toolkit'
import shoesReducer from 'features/ShoeSlice'

// Define a Redux store
const store = configureStore({
  reducer: {
    shoesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
