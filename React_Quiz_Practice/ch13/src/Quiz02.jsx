import React, { createContext, useContext, useState } from 'react'

const colorContext = // 여기에 코드 작성

function SubText() {
   const color =  // 여기에 코드 작성
   return <p style={{ color }}>Color Text</p>
}

function Quiz02() {
   const [color, setColor] = useState('black')

   return (
      <colorContext.Provider value={color}>
         <button onClick={() => setColor('pink')}>Change Color</button>
         <SubText />
      </colorContext.Provider>
   )
}

export default Quiz02
