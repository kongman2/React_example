import React, { createContext, useContext } from 'react'

const UserContext = // 여기에 코드 작성
const ThemeContext = // 여기에 코드 작성

function Profile() {
   const user = // 여기에 코드 작성
   const theme = // 여기에 코드 작성

   return (
      <div style={{ background: theme.background, padding: '20px' }}>
         {/* 여기에 코드 작성 */}
      </div>
   )
}

function Quiz03() {
   return (
      <UserContext.Provider value={{ name: '이지은' }}>
         <ThemeContext.Provider value={{ background: 'beige' }}>
            <Profile />
         </ThemeContext.Provider>
      </UserContext.Provider>
   )
}

export default Quiz03
