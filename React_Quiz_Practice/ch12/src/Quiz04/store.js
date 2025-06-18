import { configureStore } from '@reduxjs/toolkit'
import numberSlice from './numberSlice'

const store = configureStore({
   reducer: {
      number: numberSlice.reducer,
   },
})

export default store
