import React, { useReducer, useState } from 'react'

// 상태 초기값
const initialState = []

// 리듀서 함수
function reducer(state, action) {
   // state =[] (todos state)
   // action ={ type: 'add', payload: '운동하기'}

   /*
   todos = [
   { id: 1, text:'운동하기'}   
    ]
    */

   switch (action.type) {
      case 'add':
         return [...state, { id: Date.now(), text: action.payload }]
      case 'delete':
         return state.filter((todo) => todo.id !== action.payload)
      default:
         return state
   }
}

const Quiz01 = () => {
   // todos =[]
   const [todos, dispatch] = useReducer(reducer, initialState)
   const [inputValue, setInputValue] = useState('')

   // 새로운 할 일 추가 (trim(): 공백없애기)
   const handleAddTodo = () => {
      if (inputValue.trim()) {
         // type: 요청, payload: reducer에 전달할 요청 외의 데이터
         dispatch({
            type: 'add',
            payload: inputValue,
         })
         setInputValue('') //inputValue state 초기화
      }
   }

   // 할 일 삭제
   const handleDeleteTodo = (id) => {
      dispatch({ type: 'delete', payload: id })
   }

   return (
      <div>
         <h1>To-Do List</h1>
         <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="할일 입력" />
         <button onClick={handleAddTodo}>추가</button>

         <ul>
            {todos.map((todo) => (
               <li key={todo.id}>
                  {todo.text} <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default Quiz01
