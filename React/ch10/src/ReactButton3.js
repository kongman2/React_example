import styled from 'styled-components'

// styled-components는 스타일이 있는 컴포넌트(변수명 대문자)
// 벡틱안에 css를 작성(css 코드와 똑같이 작성)
const StyledButton = styled.button`
   color: white;
   background-color: green;
`
// 감싸기 기능을 이용해서 StyledButton의 성질을 그대로 가져온다
const LargeButton = styled(StyledButton)`
   font-size: 50px;
`

function ReactButton3() {
   // styled-component를 이용해서 버튼 만들기
   return (
      <div>
         <StyledButton>버튼</StyledButton>
         <LargeButton>Large</LargeButton>
      </div>
   )
}

export default ReactButton3
