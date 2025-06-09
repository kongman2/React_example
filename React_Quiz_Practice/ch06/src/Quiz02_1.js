import React, { useCallback, useState } from 'react'

function Quiz02_1() {
   const [items, setItems] = useState([])
   const [text, setText] = useState('')

   const handleChange = useCallback((event) => {
      setText(event.target.value)
   }, [])

   const handleSubmit = useCallback(
      (event) => {
         event.preventDefault()
         setItems([...items, text])
         setText('')
      },
      [items, text]
   )

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
