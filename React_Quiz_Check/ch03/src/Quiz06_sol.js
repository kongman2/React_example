import React, { useState } from 'react'

function Quiz06_sol() {
   const [count, setCount] = useState(0)

   // setCount(count++) => 사용 X => 리액트에서는 state값은 반드시 set 함수로 변화시킬 수 있으므로. 값을 직접 변화 시킬 수 X
   // count++ 은 count = count + 1 이므로
   return (
      <div>
         <p>카운트: {count}</p>
         <button
            onClick={() => {
               setCount(count + 1)
               //setCount(count++) // count = count + 1 -> 증감연산자는 count값 자체를 바꾸므로 사용할수 X(count는 const로 선언되어있음) -> count는 setCount함수를 이용해서 바꾸면 된다
            }}
         >
            1씩 증가
         </button>
      </div>
   )
}

export default Quiz06_sol
