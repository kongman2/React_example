import React, { useMemo, useState } from 'react'

function Quiz05() {
   const [number, setNumber] = useState(0)
   const [color, setColor] = useState('blue')

   const isEven = () => {
      console.log('Calculating...')
      return number % 2 === 0
   }
   // number 데이터가 바뀔때 뿐만아니라 color데이터가 바뀔때도 함수가 실행되기 때문이다.
   const even = useMemo(() => isEven(), [number])

   return (
      <div>
         <input type="text" value={number} onChange={(e) => setNumber(Number(e.target.value))} />
         <p style={{ color }}>입력한 숫자는 {even ? '짝수' : '홀수'}입니다.</p>
         <button
            onClick={() => {
               setColor('red')
            }}
         >
            red
         </button>
         <button
            onClick={() => {
               setColor('green')
            }}
         >
            green
         </button>
      </div>
   )
}

export default Quiz05
