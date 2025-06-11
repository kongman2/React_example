import styled from 'styled-components'

const Button = styled.button`
   color: white;
   background-color: ${(props) => (props.primary ? 'blue' : 'gray')};
`

function Quiz02() {
   return (
      <div>
         <Button primary>Blue Button</Button>
         <Button>Gray Button</Button>
      </div>
   )
}

export default Quiz02
