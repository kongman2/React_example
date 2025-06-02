import styled, { keyframes } from 'styled-components'

const move = keyframes`
   /* 여기에 코드 작성 */
`

const Ball = styled.div`
   width: 50px;
   height: 50px;
   background-color: red;
   border-radius: 50%;
   animation: ${move} 2s infinite;
`

function Quiz06() {
   return <Ball />
}

export default Quiz06
