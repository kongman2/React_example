import { Children } from 'react'

function Quiz03(props) {
   const { name, phone, age = 21, children } = props
   return (
      <div>
         <h2>학생정보</h2>
         <ul>
            <li>이름: {name}</li>
            <li>나이: {age}세</li>
            <li>핸드폰 번호: {phone}</li>
            <li>학과: {children}</li>
         </ul>
      </div>
   )
}

export default Quiz03
