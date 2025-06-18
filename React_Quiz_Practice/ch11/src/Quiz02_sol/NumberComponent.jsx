import { useDispatch, useSelector } from 'react-redux'

const NumberComponent = () => {
   const number = useSelector((state) => state.number)
   const dispatch = useDispatch()

   return (
      <div style={{ padding: 20 }}>
         <h2>현재 숫자: {number}</h2>
         <button
            onClick={() =>
               dispatch({
                  type: 'MULTIPLY',
                  payload: 2,
               })
            }
         >
            2배
         </button>
         <button
            onClick={() =>
               dispatch({
                  type: 'MULTIPLY',
                  payload: 3,
               })
            }
         >
            3배
         </button>
         <button
            onClick={() =>
               dispatch({
                  type: 'MULTIPLY',
                  payload: 10,
               })
            }
         >
            10배
         </button>
         <button
            onClick={() =>
               dispatch({
                  type: 'RESET',
               })
            }
         >
            초기화
         </button>
      </div>
   )
}

export default NumberComponent
