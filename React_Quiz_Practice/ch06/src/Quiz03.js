import React, { useState } from 'react'
import useCounter from './useCounter'

const Quiz03 = () => {
   const { count, increment, decrement, reset } = useCounter(0, 1)

   return (
      <div>
         <p>현재 숫자: {count}</p>
         <button onClick={increment}>1씩 증가</button>
         <button onClick={decrement}>1씩 감소</button>
         <button onClick={reset}>초기화</button>
      </div>
   )
}

export default Quiz03
