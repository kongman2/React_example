import React, { useState } from 'react'

function Quiz05() {
   const [number, setNumber] = useState(0)
   const [color, setColor] = useState('blue')

   const isEven = () => {
      console.log('Calculating...')
      return number % 2 === 0
   }

   return (
      <div>
         <input type="text" value={number} onChange={(e) => setNumber(Number(e.target.value))} />
         <p style={{ color }}>입력한 숫자는 {isEven() ? '짝수' : '홀수'}입니다.</p>
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
