//grid를 이용한 반응형 레이아웃

// https://mui.com/material-ui/react-grid/
// https://mui.com/material-ui/customization/breakpoints/
/*
xs, extra-small: 0px
sm, small: 600px
md, medium: 900px
lg, large: 1200px
xl, extra-large: 1536px
*/

import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { Container } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
   backgroundColor: '#fff',
   ...theme.typography.body2,
   padding: theme.spacing(1),
   textAlign: 'center',
   color: theme.palette.text.secondary,
}))

function MUI4() {
   return (
      <Container maxWidth="md">
         <Grid container spacing={2}>
            {/* <Grid size={8}>
               <Item>size=8</Item>
            </Grid>
            <Grid size={4}>
               <Item>size=4</Item>
            </Grid>
            <Grid size={4}>
               <Item>size=4</Item>
            </Grid>
            <Grid size={8}>
               <Item>size=8</Item>
            </Grid> */}
            <Grid size={{ xs: 6, md: 8 }}>
               <Item>xs=6 md=8</Item>
            </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
               <Item>xs=6 md=4</Item>
            </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
               <Item>xs=6 md=4</Item>
            </Grid>
            <Grid size={{ xs: 6, md: 8 }}>
               <Item>xs=6 md=8</Item>
            </Grid>
         </Grid>
      </Container>
   )
}

export default MUI4
