import { useSelector, useDispatch } from 'react-redux'
import React, { useState } from 'react'
import { addTodo, removeTodo } from './todoSlice'

function TodoApp() {
   const todos = useSelector((state) => state.todos)
   const dispatch = useDispatch()
   const [newTodo, setNewTodo] = useState('')

   return (
      <div>
         <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="할 일 입력" />
         <button onClick={() => dispatch(addTodo(newTodo))}>등록</button>
         <ul>
            {todos.map((todo) => (
               <li key={todo.id}>
                  {todo.text}
                  <button onClick={() => dispatch(removeTodo(todo.id))}>삭제</button>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default TodoApp
