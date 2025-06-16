import React, { useState } from 'react'
import Button from '@mui/material/Button'

function MUI7_1() {
   // 상태를 이용해 버튼의 색상을 제어
   const [color, setColor] = useState('primary') // 기본 색상은 'primary'

   const handleClick = () => {
      // 버튼을 클릭할 때마다 색상 변경
      setColor((prevColor) => (prevColor === 'primary' ? 'secondary' : 'primary'))
   }

   return (
      <>
         {/* 상태에 따라 버튼 색상이 'primary' 또는 'secondary'로 변경됨 */}
         <Button variant="contained" color={color} onClick={handleClick}>
            Toggle Color
         </Button>
      </>
   )
}

export default MUI7_1
