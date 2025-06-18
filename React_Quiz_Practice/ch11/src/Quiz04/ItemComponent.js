import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ItemComponent() {
   const dispatch = useDispatch()
   const [inputValue, setInputValue] = useState('')
   const items = useSelector((state) => state.items)

   const inputItem = () => {
      if (inputValue.trim()) {
         dispatch({ type: 'additem', payload: inputValue })
         setInputValue('')
      }
   }

   const deleteItem = () => dispatch({ type: 'deleteitem', payload: id })

   return (
      <div>
         <h1>상품 등록</h1>
         <input type="text" value={inputValue} onChange={setInputValue((e) => e.target.value)} />
         <button onClick={inputItem}></button>
         <ul>
            {items.map((item) => (
               <li li key={item.id}>
                  {item.text}
                  <button onClick={deleteItem}></button>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default ItemComponent
s
