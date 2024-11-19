import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '../features/counter/counterSlice.js'


export const store = configureStore({
  reducer: {  // this step means we are linking/registering the slice reducers to our store
    counter: counterReducer,
    // counter now will look like this : 
    // counter: {
    //  value: 0  // comes from initialState defined in counterSlice
    // }
  },
})