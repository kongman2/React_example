import styled from 'styled-components'

//const StyledInput = styled.input.attr({ type="text" , placeholder='입력란',})`
const StyledInput = styled.input`
   background-color: skyblue;
`
const StyledInput2 = styled(StyledInput)`
   background-color: white;
`

function Quiz01() {
   return (
      <div>
         <StyledInput type="text" />
         <StyledInput2 type="text" />
      </div>
   )
}

export default Quiz01
