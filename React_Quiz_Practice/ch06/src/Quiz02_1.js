import React, { useState } from 'react'

function Quiz02_1() {
   const [items, setItems] = useState([])
   const [text, setText] = useState('')

   const handleChange = (event) => {
      setText(event.target.value)
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      setItems([...items, text])
      setText('')
   }

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange} />
            <button type="submit">추가</button>
         </form>
         <ul>
            {items.map((item, index) => (
               <li key={index}>{item}</li>
            ))}
         </ul>
      </div>
   )
}

export default Quiz02_1
