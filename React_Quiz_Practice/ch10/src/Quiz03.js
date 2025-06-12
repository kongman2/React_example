import styled from 'styled-components'

const Card = styled.div`
   border: 1px solid black;

   &:hover {
      border-color: red;
   }
`

function Quiz03() {
   return <Card>Hover me!</Card>
}
export default Quiz03
