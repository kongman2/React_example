import React, { useEffect } from 'react'
// 맨 처음 랜더링 될때 1번 실행
function Quiz01() {
   useEffect(() => {
      console.log('Effect triggered')
   }, [])

   return <div>Hello World</div>
}

export default Quiz01
