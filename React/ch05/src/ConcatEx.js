import React, { useState } from 'react'

function ConcatEx() {
   const [items, setItems] = useState([{ id: 1, name: 'Item 1' }])

   const addItemWithConcat = () => {
      const newItem = { id: 2, name: 'Item 2' }
      // concat은 새로운 배열을 반환함 (불변성 유지)
      const updatedItems = items.concat(newItem)
      setItems(updatedItems) // 새로운 배열로 상태 업데이트
   }

   return (
      <div>
         <button onClick={addItemWithConcat}>목록추가</button>
         <ul>
            {items.map((item) => (
               <li key={item.id}>{item.name}</li>
            ))}
         </ul>
      </div>
   )
}

export default ConcatEx
