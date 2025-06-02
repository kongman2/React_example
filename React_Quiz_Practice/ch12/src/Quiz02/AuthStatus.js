import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from './authSlice'

function AuthStatus() {
   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
   const dispatch = useDispatch()

   return (
      <div>
         {isAuthenticated ? (
         // 여기에 코드 작성
         ) : (
         //   여기에 코드 작성
         )}
      </div>
   )
}

export default AuthStatus
