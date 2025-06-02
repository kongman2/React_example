import React, { useState, useEffect } from 'react'

function Quiz03() {
   const [count, setCount] = useState(0)

   useEffect(() => {
      // 여기에 코드를 작성하세요
   }, []) // 이 부분을 수정하세요

   return (
      <div>
         <p>Count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
   )
}

export default Quiz03
