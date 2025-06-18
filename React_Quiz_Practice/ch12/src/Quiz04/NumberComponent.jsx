import { useDispatch, useSelector } from 'react-redux'
import { MULTIPLY, RESET } from './numberSlice'

function NumberComponent() {
   const dispatch = useDispatch()
   const number = useSelector((state) => state.number.number)

   return (
      <div>
         <h1>현재 숫자: {number}</h1>
         <button
            onClick={() => {
               dispatch(MULTIPLY(2))
            }}
         >
            2배
         </button>
         <button
            onClick={() => {
               dispatch(MULTIPLY(3))
            }}
         >
            3배
         </button>
         <button
            onClick={() => {
               dispatch(MULTIPLY(10))
            }}
         >
            10배
         </button>
         <button
            onClick={() => {
               dispatch(RESET())
            }}
         >
            초기화
         </button>
      </div>
   )
}

export default NumberComponent
