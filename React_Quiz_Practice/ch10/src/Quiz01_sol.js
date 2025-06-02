import styled from 'styled-components'

const StyledInput = styled.input.attrs({ type: 'text' })`
   background-color: skyblue;
   width: 400px;
   height: 50px;
`
const StyledInput2 = styled(StyledInput)`
   background-color: white;
`

function Quiz01_sol() {
   return (
      <div>
         <StyledInput />
         <StyledInput2 />
      </div>
   )
}

export default Quiz01_sol
