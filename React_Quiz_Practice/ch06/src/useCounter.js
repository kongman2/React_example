import { useState } from 'react'

function useCounter(initialValue, step) {
   const [count, setCount] = useState(initialValue)

   const increment = () => {
      setCount(count + step)
   }

   const decrement = () => {
      setCount(count - step)
   }

   const reset = () => {
      setCount(initialValue)
   }
   return { count, increment, decrement, reset }
}

export default useCounter
