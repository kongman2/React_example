import React, { createContext, useContext, useState } from 'react'

// 1. Context 생성
const colorContext = createContext('black')

function SubText() {
   // 2. context 값 받아오기
   const color = useContext(colorContext)
   return <p style={{ color }}>Color Text</p>
}

function Quiz02_sol() {
   // 3. 상태로 색상 관리
   const [color, setColor] = useState('black')

   return (
      // 4. Provider로 value 전달
      <colorContext.Provider value={color}>
         <button onClick={() => setColor('pink')}>Change Color</button>
         <SubText />
      </colorContext.Provider>
   )
}

export default Quiz02_sol
