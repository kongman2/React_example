import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const TodoComponent = () => {
   const [inputValue, setInputValue] = useState('')
   const todos = useSelector((state) => state.todos)
   const dispatch = useDispatch()

   // 할일 등록
   const handleAddTodo = () => {
      if (inputValue.trim()) {
         // inputValue = '운동하기'
         dispatch({ type: 'addTodo', payload: inputValue }) // action객체를 reducer의 action 매개변수로 전달
         setInputValue('')
      }
   }

   // 할일 삭제
   const handleDeleteTodo = (id) => {
      dispatch({ type: 'deleteTodo', payload: id })
   }

   return (
      <div>
         <h1>Todo List</h1>
         <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="할 일 추가" />
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

export default TodoComponent
