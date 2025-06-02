import styled from 'styled-components'

const Box = styled.div`
   /* 여기에 코드 작성 */
   background-color: lightgray;
   margin: 10px;
`

function Quiz04() {
   return (
      <div>
         <Box size="small">Small Box</Box>
         <Box size="medium">Medium Box</Box>
         <Box size="large">Large Box</Box>
      </div>
   )
}

export default Quiz04
