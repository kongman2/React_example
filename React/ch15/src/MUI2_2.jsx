// 커스터마이징 한 CSS 적용방법 2: 인라인 스타일 적용

import { Button } from '@mui/material'

function MUI2_2() {
   return (
      <Button
         style={{
            backgroundColor: '#1976d2',
            color: 'white',
            padding: '16px',
         }}
      >
         Inline Styled Button
      </Button>
   )
}

export default MUI2_2
