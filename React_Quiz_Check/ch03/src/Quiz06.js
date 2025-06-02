import { useState } from 'react'

function Quiz06() {
   const [count, setCount] = useState(0)
   return (
      <div>
         <p>카운트: {count}</p>
         <button
            onClick={() => {
               return setCount(count + 1)
            }}
         >
            1씩 증가
         </button>
      </div>
   )
}

export default Quiz06
