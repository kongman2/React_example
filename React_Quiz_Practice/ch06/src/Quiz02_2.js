import React, { useMemo } from 'react'

const Quiz02_1 = ({ numbers }) => {
   // filter, reduce 사용하여 홀수만 필터링하고 그 합계를 계산한 후 useMemo로 처리합니다.
   const oddSum = useMemo(() => {
      return numbers.filter((num) => num % 2 === 1).reduce((a, b) => a + b)
   }, [numbers])

   return (
      <div>
         <p>주어진 숫자 배열: {numbers.join(', ')}</p>
         <p>홀수의 합계: {oddSum}</p>
      </div>
   )
}

export default Quiz02_1
