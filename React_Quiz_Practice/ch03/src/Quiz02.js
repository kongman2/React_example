import step1 from './images/step1.jpg'
import step2 from './images/step2.jpg'
import React, { useState } from 'react'

function Quiz02() {
   const [display, setDisPlay] = useState('none')
   const [name, setName] = useState('이상해씨')
   return (
      <div>
         <img src={step1} width="150" style={{ dispaly: name === '이상해씨' ? 'none' : 'block' }} />
         <br />
         <img src={step2} width="150" style={{ display }} />
         <br />
         <p>{name}</p>
         <button
            onClick={() => {
               setName('이상해풀')
               setDisPlay('block')
            }}
         >
            이상해씨 다음은?
         </button>
      </div>
   )
}

export default Quiz02
