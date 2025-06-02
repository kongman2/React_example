import React, { useState } from 'react'

function PushEx() {
   const [items, setItems] = useState([{ id: 1, name: 'Item 1' }])

   const addItemWithPush = () => {
      const newItem = { id: 2, name: 'Item 2' }
      // push는 원본 배열을 변경함
      items.push(newItem)
      setItems(items) // 상태는 변경되지 않음
   }

   return (
      <div>
         <button onClick={addItemWithPush}>목록추가</button>
         <ul>
            {items.map((item) => (
               <li key={item.id}>{item.name}</li>
            ))}
         </ul>
      </div>
   )
}

export default PushEx
