import React, { useState } from 'react'

const Say = () => {
   const [message, setMessage] = useState('초기값')
   const onClickEnter = () => setMessage('안녕하세요.')
   const onClickLeave = () => setMessage('안녕히 가세요.')

   /* 
       1. useState 선언
        const [ state값을 저장할 변수, state값을 바꿀함수 ] = useState(초기 state 값)
       2. useState 사용
        state값을 바꿀함수(업데이트 값) 
    */
   const [color, setColor] = useState('black')

   return (
      <div>
         <button onClick={onClickEnter}>입장</button>
         <button onClick={onClickLeave}>퇴장</button>
         <h1 style={{ color }}>{message}</h1>
         <button
            onClick={() => {
               setColor('red')
            }}
         >
            빨간
         </button>

         <button
            onClick={() => {
               setColor('green')
            }}
         >
            초록
         </button>

         <button
            onClick={() => {
               setColor('blue')
            }}
         >
            파란
         </button>
      </div>
   )
}

export default Say
