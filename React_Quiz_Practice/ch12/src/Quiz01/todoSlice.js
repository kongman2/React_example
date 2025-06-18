import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
   name: 'todos',
   initialState: [],
   reducers: {
      addTodo: (state, action) => {
         state.push({ id: Date.now(), text: action.payload })
      },
      removeTodo: (state, action) => {
         // ★ filter, map을 사용시 return을 하지 않으면 state값을 바꾸는게 아니라 배열만 만들어주므로 반드시 리턴
         return state.filter((todo) => todo.id !== action.payload)
      },
   },
})

export default todoSlice.reducer
export const { addTodo, removeTodo } = todoSlice.actions
