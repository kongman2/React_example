import styled from 'styled-components'

const Container = styled.div`
   background-color: lightblue;
   padding: 20px;

   @media (max-width: 600px) {
      background-color: yellow;
   }
`

function Quiz05_sol() {
   return <Container>반응형 스타일링 테스트</Container>
}

export default Quiz05_sol
