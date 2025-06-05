import React, { useEffect } from 'react'
// 최초 렌더링 될떄 1번 실행, 그이후 랜더링 될때 실행
function Quiz02() {
   useEffect(() => {
      console.log('Component rendered')
   })

   return <div>Hello World</div>
}

export default Quiz02
