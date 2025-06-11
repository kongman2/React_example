import React, { createContext, useContext } from 'react'

const colorContext = createContext({ color: 'red' })

function Quiz01_sol() {
   const color = useContext(colorContext)

   return <div style={color}>Hello Context!</div>
}

export default Quiz01_sol
