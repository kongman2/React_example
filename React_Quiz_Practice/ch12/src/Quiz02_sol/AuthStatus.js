import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from './authSlice'

function AuthStatus() {
   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
   const dispatch = useDispatch()

   return (
      <div>
         {isAuthenticated ? (
            <div>
               <p>로그인이 완료되었습니다!</p>
               <button onClick={() => dispatch(logout())}>로그아웃</button>
            </div>
         ) : (
            <div>
               <p>로그인하세요!</p>
               <button onClick={() => dispatch(login())}>로그인</button>
            </div>
         )}
      </div>
   )
}

export default AuthStatus
