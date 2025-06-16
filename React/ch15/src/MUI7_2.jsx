import React, { useState } from 'react'
import Button from '@mui/material/Button'

function MUI7_2() {
   // 상태를 이용해 버튼의 크기를 제어
   const [size, setSize] = useState('medium') // 기본 크기는 'medium'

   // https://mui.com/material-ui/react-button/#sizes
   const handleClick = () => {
      // 버튼을 클릭할 때마다 크기 변경
      setSize((prevSize) => (prevSize === 'medium' ? 'large' : 'medium'))
   }

   return (
      <>
         {/* 상태에 따라 버튼 크기가 'medium' 또는 'large'로 변경됨 */}
         <Button variant="contained" size={size} onClick={handleClick}>
            Toggle Size
         </Button>
      </>
   )
}

export default MUI7_2
