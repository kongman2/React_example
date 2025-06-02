import styled from 'styled-components'

const Card = styled.div`
   border: 2px solid black;
   padding: 20px;

   &:hover {
      border-color: red;
   }
`

function Quiz03_sol() {
   return <Card>Hover me!</Card>
}

export default Quiz03_sol
