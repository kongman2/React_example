import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'

const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
   },
   // 여기에 코드 작성
})

export default store
