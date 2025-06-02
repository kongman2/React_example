import React, { useEffect } from 'react'

function Quiz01_sol() {
   useEffect(() => {
      console.log('Effect triggered')
   }, [])

   return <div>Hello World</div>

   // 정답: 맨 처음 렌더링 될때 처음 한번만
}

export default Quiz01_sol
