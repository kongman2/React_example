import styled, { keyframes } from 'styled-components'

const move = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(0);
  }
`

const Ball = styled.div`
   width: 50px;
   height: 50px;
   background-color: red;
   border-radius: 50%;
   animation: ${move} 2s infinite;
`

function Quiz06_sol() {
   return <Ball />
}

export default Quiz06_sol
