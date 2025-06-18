import { useDispatch, useSelector } from 'react-redux'

function NumberComponent() {
   const dispatch = useDispatch()
   const number = useSelector((state) => state.number)
   return (
      <div>
         <h1>현재 숫자: {number}</h1>
         <button onClick={() => dispatch({ type: 'multiplication', payload: 2 })}>2배</button>
         <button onClick={() => dispatch({ type: 'multiplication', payload: 3 })}>3배</button>
         <button onClick={() => dispatch({ type: 'multiplication', payload: 10 })}>10배</button>
         <button onClick={() => dispatch({ type: 'initialization' })}>초기화</button>
      </div>
   )
}

export default NumberComponent
