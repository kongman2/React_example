import React, { useEffect, useState } from 'react'

function Quiz04() {
   const [isChecked, setIsChecked] = useState(false)

   const handleCheckboxChange = () => {
      setIsChecked(!isChecked)
   }

   useEffect(() => {
      console.log('체크박스 실행')
      return () => console.log('체크박스가 업데이트 되기 전 입니다.')
      // 뒷정리 함수 작성
   }, [isChecked]) // 이 부분 작성

   return (
      <div>
         <label>
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
            체크박스
         </label>
         <p>현재 상태: {isChecked ? '체크됨' : '체크 안됨'}</p>
      </div>
   )
}

export default Quiz04
