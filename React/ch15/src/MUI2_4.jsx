// 커스터마이징 한 CSS 적용방법 4: styled 사용(json 객체 형태로 사용)
// https://mui.com/material-ui/customization/how-to-customize/#the-sx-prop

// 컬러 팔레트
// https://mui.com/material-ui/customization/palette/

import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

const CustomButton = styled(Button)(({ theme }) => {
   console.log(theme)

   return {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      padding: theme.spacing(2), // `${8 * 2}px` = '16px'
      '&:hover': {
         backgroundColor: theme.palette.secondary.main,
      },
   }
})

function MUI2_4() {
   return <CustomButton>Styled Button</CustomButton>
}

export default MUI2_4
