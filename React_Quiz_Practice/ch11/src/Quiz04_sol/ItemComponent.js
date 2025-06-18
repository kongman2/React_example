import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function ItemComponent() {
   const [input, setInput] = useState('')
   const items = useSelector((state) => state.items)
   const dispatch = useDispatch()

   const handleAdd = () => {
      if (input.trim()) {
         dispatch({
            type: 'ADD_ITEM',
            payload: input,
         })
         setInput('')
      }
   }

   const handleDelete = (id) => {
      dispatch({
         type: 'DELETE_ITEM',
         payload: id,
      })
   }

   return (
      <div style={{ padding: 20 }}>
         <h2>상품 등록</h2>
         <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="상품명 입력" />
         <button onClick={handleAdd}>등록</button>

         <ul>
            {items.map((item) => (
               <li key={item.id}>
                  {item.name}
                  <button onClick={() => handleDelete(item.id)}>삭제</button>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default ItemComponent
