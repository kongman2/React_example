import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
   name: 'todos',
   initialState: [],
   reducers: {
      //여기에 코드 작성
   },
})

export default todoSlice
export const { addTodo, removeTodo } = todoSlice.actions
