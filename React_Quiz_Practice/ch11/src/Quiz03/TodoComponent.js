import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'

const TodoComponent = () => {
   const [inputValue, setInputValue] = useState('')
   const todos = useSelector((state) => state.todos)
   const dispatch = useDispatch()

   // 추가
   const handleAddTodo = () => {
      if (inputValue.trim()) {
         dispatch({ type: 'add', payload: inputValue })
         setInputValue('')
      }
   }

   // 삭제
   const handleDeleteTodo = (id) => {
      dispatch({ type: 'delete', payload: id })
   }

   return (
      <div>
         <h1>To-Do List</h1>
         <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="할일 추가" />
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
