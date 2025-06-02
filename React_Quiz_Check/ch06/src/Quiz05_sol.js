import React, { useState, useMemo } from 'react'

function Quiz05_sol() {
   const [number, setNumber] = useState(0)
   const [color, setColor] = useState('blue')

   // 기존코드는 color state가 바뀌면서 컴포넌트가 재렌더링이 되므로 isEven 함수가 무조건 실행되었다. useMemo를 활용해서 number state가 변경될때만 isEven을 실행한다.
   const isEven = () => {
      console.log('Calculating...')
      return number % 2 === 0
   }

   const even = useMemo(() => isEven(), [number])

   /*
   혹은 
   const even = useMemo(() => {
      console.log('Calculating...')
      return number % 2 === 0
   }, [number])
   
   */

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

export default Quiz05_sol
