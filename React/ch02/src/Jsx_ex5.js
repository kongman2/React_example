import logo from './logo.svg'
import './App.css'

function App() {
   //4. 인라인 스타일을 사용한다.
   const name = '리액트'
   const style = {
      backgroundColor: 'red',
      color: 'black',
      fontSize: '48px',
      padding: 16, //단위는 생략시 px로 지정됨
   }

   return <div style={style}>{name}</div>

   /* 
   혹은 
   return <div style={{
      backgroundColor: 'red',
      color: 'black',
      fontSize: '48px',
      padding: 16, //단위는 생략시 px로 지정됨
   }}>{name}</div>
   */
}

export default App
