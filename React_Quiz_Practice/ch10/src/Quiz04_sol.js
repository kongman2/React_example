import styled from 'styled-components'

const Box = styled.div`
   width: ${(props) => (props.size === 'small' ? '100px' : props.size === 'medium' ? '200px' : '300px')};
   height: ${(props) => (props.size === 'small' ? '100px' : props.size === 'medium' ? '200px' : '300px')};
   background-color: lightgray;
   margin: 10px;
`

function Quiz04_sol() {
   return (
      <div>
         <Box size="small">Small Box</Box>
         <Box size="medium">Medium Box</Box>
         <Box size="large">Large Box</Box>
      </div>
   )
}

export default Quiz04_sol
