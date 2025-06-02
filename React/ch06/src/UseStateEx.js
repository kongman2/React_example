import React, { useState } from 'react'

const UseStateEx = () => {
   const [value, setValue] = useState(0)

   return (
      <div>
         <p>
            현재 카운터 값은 <b>{value}</b>입니다
         </p>
         <button onClick={() => setValue(value + 1)}>1증가</button>
         <button onClick={() => setValue(value - 1)}>1감소</button>
      </div>
   )
}

export default UseStateEx
