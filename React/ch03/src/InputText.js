import React, { useState } from 'react'

function InputText() {
   const [text, setText] = useState('')

   return (
      <div>
         <input
            type="text"
            value={text}
            //change 이벤트: input, select, 체크박스, 라디오 버튼 등의 상태가 변경되었을때 발생하는 이벤트
            onChange={(e) => {
               console.log(e) // 이벤트 정보를 가지고 있는 객체
               setText(e.target.value) //e.target.value -> input창에 입력한 값
               // 입력한 값으로 text State의 값을 바꾼다
            }}
         />
         <p>입력한 값: {text}</p>
      </div>
   )
}

export default InputText
