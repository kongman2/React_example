import React, { useState, useRef } from 'react'

function Quiz07_sol() {
   const [textLength, setTextLength] = useState(0)
   const inputRef = useRef(null)

   const calculateLength = () => {
      setTextLength(inputRef.current.value.length)
   }

   return (
      <div>
         <input type="text" ref={inputRef} />
         <button onClick={calculateLength}>Calculate Length</button>
         <p>Text Length: {textLength}</p>
      </div>
   )
}

export default Quiz07_sol
