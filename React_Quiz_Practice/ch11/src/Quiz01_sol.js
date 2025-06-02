import React, { useReducer, useState } from 'react'

// 상태 초기값
const initialState = []

// 리듀서 함수
function reducer(state, action) {
   //state: 현재 state값(todos)
   //action: dispatch에서 전달한 매개변수 값 => { type: 'add', payload: '저녁먹기'}
   // 저녁먹기 삭제할때 action => { type: 'delete', payload: 2024-11-07 10:50:12 }
   switch (action.type) {
      //...state를 사용해서 기존의 데이터를 계속 유지해야 한다
      case 'add':
         return [...state, { id: Date.now(), text: action.payload }]
      case 'delete':
         return state.filter((todo) => todo.id !== action.payload)
      default:
         return state
   }
}

const Quiz01_sol = () => {
   const [todos, dispatch] = useReducer(reducer, initialState)
   const [inputValue, setInputValue] = useState('')

   // 새로운 할 일 추가
   const handleAddTodo = () => {
      // ' 저녁먹기.  ' ->  trim() 함수는 양옆의 공백을 없앤다
      if (inputValue.trim()) {
         // dispath 사용시 데이터를 2개이상 전달할 경우 json객체로 전달
         // dispath의 역할: action전달, reducer호출
         dispatch({ type: 'add', payload: inputValue })
         setInputValue('')
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

export default Quiz01_sol
