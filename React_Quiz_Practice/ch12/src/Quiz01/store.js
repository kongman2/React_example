import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './todoSlice'

const store = configureStore({
   reducer: {
      todos: todoSlice.reducer,
      // 여기에 코드 작성
   },
})

export default store
