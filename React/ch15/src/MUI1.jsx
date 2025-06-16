// 기본 MUI 사용
// https://mui.com/material-ui/react-button/#basic-button

import Button from '@mui/material/Button'

function MUI1() {
   return (
      <div>
         <Button variant="text">Text</Button>
         <Button variant="contained">Contained</Button>
         <Button variant="outlined">Outlined</Button>
      </div>
   )
}

export default MUI1
