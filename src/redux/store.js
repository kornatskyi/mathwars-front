import { configureStore } from '@reduxjs/toolkit'
import challegeReducer from './challengeSlice'
import { reducer as formReducer } from 'redux-form';

export default configureStore({
  reducer: {
   challenge:challegeReducer,
   form: formReducer


  }
})