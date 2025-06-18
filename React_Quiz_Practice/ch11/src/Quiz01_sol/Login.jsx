import { useDispatch, useSelector } from 'react-redux'

function Login() {
   const dispatch = useDispatch()
   const { isAuthenticated, user } = useSelector((state) => state)

   const handleLogin = () => {
      const userData = { username: 'haseo', email: 'haseo@example.com' }
      dispatch({
         type: 'LOGIN',
         payload: userData,
      })
   }

   const handleLogout = () => {
      dispatch({
         type: 'LOGOUT',
      })
   }

   return (
      <div style={{ padding: 20 }}>
         {isAuthenticated ? (
            <div>
               <h2>Welcome, {user.username}!</h2>
               <button onClick={handleLogout}>로그아웃</button>
            </div>
         ) : (
            <div>
               <h2>로그인되지 않음</h2>
               <button onClick={handleLogin}>로그인</button>
            </div>
         )}
      </div>
   )
}

export default Login
