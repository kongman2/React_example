// 1. 컴포넌트 작성시 파일명은 대문자로 시작
// 2. 화살표 함수나 function 함수로 작성
// 3. 함수명은 파일명으로 똑같이 작성(대체적으로 이렇게 많이 사용)
// 4. 외부에서 컴포넌트를 사용하기 위해 마지막에 무조건 export 해준다

import PropTypes from 'prop-types'

const MyComponent = ({ name = '기본이름', job, forNumber, children }) => {
   // const { name = '기본이름', job, forNumber, children } = props
   return (
      <div>
         <p>안녕하세요. 제 이름은 {name} 입니다.</p>
         <p>제 직업은 {job} 입니다.</p>
         <p>칠드런 값은 {children} 입니다.</p>
         <p>좋아하는 숫자는 {forNumber} 입니다.</p>
      </div>
   )
}

export default MyComponent
