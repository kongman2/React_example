import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
   name: 'todos',
   initialState: [],
   reducers: {
      addTodo: (state, action) => {
         // 툴킷은 자동으로 불변성을 유지하므로 push를 사용해서 직접적으로 state값을 변경해도 된다
         state.push({ id: Date.now(), text: action.payload })

         // 아래처럼 불변성을 유지하는 코드를 작성해도 상관 X
         // 최상위 state를 바꾸는 경우는 반드시 return
         // return [...state, { id: Date.now(), text: action.payload }]
      },
      removeTodo: (state, action) => {
         //filter, map 사용시 return을 하지 않으면 그냥 배열 자체만 만들어주므로 반드시 리턴
         // state의 최상위 값을 재할당하는 것이 아니라 새로운 배열을 반환하여 기존 상태를 대체하는 방식이기 때문에 return이 필요
         return state.filter((todo) => todo.id !== action.payload)
      },
   },
})

export default todoSlice
export const { addTodo, removeTodo } = todoSlice.actions
