import { useState } from 'react'

function Quiz08() {
   const [fontSize, setFontSize] = useState('15px')
   return (
      <div>
         <input
            type="text"
            value={fontSize}
            onChange={(e) => {
               setFontSize(e.target.value)
            }}
         />
         <p style={{ fontSize }}>귤은 비타민 C를 포함하고 있어 감기에 좋습니다.</p>
      </div>
   )
}

export default Quiz08
