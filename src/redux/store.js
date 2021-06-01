import { configureStore } from '@reduxjs/toolkit'
import challegeReducer from './challengeSlice'
export default configureStore({
  reducer: {
   challenge:challegeReducer
  }
})