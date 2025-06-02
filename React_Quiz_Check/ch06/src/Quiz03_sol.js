import React, { useState, useEffect } from 'react'

function Quiz03_sol() {
   const [count, setCount] = useState(0)

   useEffect(() => {
      console.log('Count changed')
   }, [count])

   return (
      <div>
         <p>Count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
   )
}

export default Quiz03_sol
