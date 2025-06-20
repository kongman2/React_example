import step1 from './images/step1.jpg'
import step2 from './images/step2.jpg'
import step3 from './images/step3.jpg'
import React, { useState } from 'react'

function Quiz04() {
   const [displayStates, setDisplayStates] = useState({
      display1: 'block',
      display2: 'none',
      display3: 'none',
      level: 1, // 레벨단계
   })

   const evolve = (display, levelVal) => {
      // display :  display2 or display3
      // levelVal : 2 or 3

      // 모든 display 전부 초기화
      setDisplayStates({
         display1: 'none',
         display2: 'none',
         display3: 'none',
      })
      // prevState : 현재 State 값
      setDisplayStates((prevState) => ({
         ...prevState,
         [display]: 'block',
         level: levelVal,
      }))
   }
   return (
      <div>
         <img src={step1} width="150" style={{ display: displayStates.display1 }} />
         <img src={step2} width="150" style={{ display: displayStates.display2 }} />
         <img src={step3} width="150" style={{ display: displayStates.display3 }} />
         <br />
         {/* A && B -> A가 true면 B를 렌더링*/}
         {/* A || B -> A가 true면 A를 렌더링*/}
         {/*이벤트에서 함수 실행 시 매개변수가 있으면 화살표 함수에서 실행(외워야함) */}
         {/* 레벨에 따라서 보여줌 */}
         {displayStates.level === 1 && <button onClick={() => evolve('display2', 2)}>이상해씨 진화!</button>}
         {displayStates.level === 2 && <button onClick={() => evolve('display3', 3)}>이상해풀 진화!</button>}
         {displayStates.level === 3 && <p>진화 끝!</p>}
      </div>
   )
}

export default Quiz04
