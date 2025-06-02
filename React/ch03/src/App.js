import './App.css'
// import MyComponent from './MyComponent'
// import Say from './Say'
import InputText from './InputText'
// import Type from './Type'

function App() {
   // const name = 'react'
   // return <div className="react">{name}</div>
   // return (
   //    <MyComponent name="하서" job="강사" forNumber={1}>
   //       맑음
   //    </MyComponent>
   // )
   // return <Say />
   return <InputText />

   // const func = (a, b) => {
   //    return a + b
   // } 분리해서 전달 가능

   // return (
   //    <Type
   //       str="react"
   //       num={200}
   //       bool={1 == 1}
   //       arr={[0, 1, 2]}
   //       json={{ react: '리액트', time: 2 }}
   //       func={(a, b) => {
   //          return a + b
   //       }}
   //       func={func}
   //    />
   // )
}

export default App
