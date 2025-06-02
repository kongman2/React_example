import logo from './logo.svg'
import './App.css'

function App() {
   //3. || 연산
   const name = undefined //false
   return <div>{name || '리액트'}</div>
}

export default App
