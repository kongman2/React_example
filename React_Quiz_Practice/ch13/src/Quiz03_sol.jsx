import React, { createContext, useContext } from 'react'

// 1. 두 개의 Context 생성
const UserContext = createContext()
const ThemeContext = createContext()

function Profile() {
   // 2. 각각의 Context 값 받아오기
   const user = useContext(UserContext)
   const theme = useContext(ThemeContext)

   return (
      <div style={{ background: theme.background, padding: '20px' }}>
         <p>이름: {user.name}</p>
         <p>배경색: {theme.background}</p>
      </div>
   )
}

function Quiz03_sol() {
   // 3. Provider 중첩 구조
   return (
      <UserContext.Provider value={{ name: '이지은' }}>
         <ThemeContext.Provider value={{ background: 'beige' }}>
            <Profile />
         </ThemeContext.Provider>
      </UserContext.Provider>
   )
}

export default Quiz03_sol
