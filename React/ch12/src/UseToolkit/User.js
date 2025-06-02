import { useDispatch, useSelector } from 'react-redux'
import { setName, setAge } from './userSlice'

function User() {
   const dispatch = useDispatch()
   //name = '', age = 0
   const { name, age } = useSelector((state) => {
      return state.user // { name: '', age: 0 }
   })

   return (
      <div>
         <input type="text" placeholder="이름" onChange={(e) => dispatch(setName(e.target.value))} />
         <input type="number" placeholder="나이" onChange={(e) => dispatch(setAge(Number(e.target.value)))} />
         <p>이름: {name}</p>
         <p>나이: {age}</p>
      </div>
   )
}

export default User
