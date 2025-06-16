//테마 변경
// https://mui.com/material-ui/customization/theming/#createtheme-options-args-theme

// 컬러 팔레트
// https://mui.com/material-ui/customization/palette/

import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Button } from '@mui/material'

const theme = createTheme({
   palette: {
      primary: {
         main: '#000', // 기본 검은색
      },
      secondary: {
         main: '#dc004e', // 기본 빨간색
      },
   },
})

function MUI5() {
   return (
      <ThemeProvider theme={theme}>
         <Button color="primary" variant="contained">
            Primary 버튼
         </Button>
         <Button color="secondary" variant="outlined">
            Secondary 버튼
         </Button>
      </ThemeProvider>
   )
}

export default MUI5
