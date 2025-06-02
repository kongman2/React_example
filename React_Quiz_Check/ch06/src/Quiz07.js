import React, { useState } from 'react'

function Quiz07() {
   const [textLength, setTextLength] = useState(0)

   const calculateLength = () => {
      // 입력 필드의 텍스트 길이를 계산하는 로직을 작성하세요.
   }

   return (
      <div>
         <input type="text" />
         <button onClick={calculateLength}>Calculate Length</button>
         <p>Text Length: {textLength}</p>
      </div>
   )
}

export default Quiz07
