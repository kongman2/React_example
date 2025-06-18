import { Provider } from 'react-redux'
// 1번 퀴즈
import storeQuiz01 from './Quiz01/store'
import TodoApp from './Quiz01/TodoApp'

//2번 퀴즈
// import storeQuiz02 from './Quiz02/store'
// import AuthStatus from './Quiz02/AuthStatus'

//3번 퀴즈
// import storeQuiz03 from './Quiz03/store'
// import ProductList from './Quiz03/ProductList'

//4번 퀴즈
// import storeQuiz04 from './Quiz04/store'
// import NumberComponent from './Quiz04/NumberComponent'

function App() {
   return (
      <Provider store={storeQuiz01}>
         <TodoApp />
      </Provider>
   )
   // return (
   //    <Provider store={storeQuiz02}>
   //       <AuthStatus />
   //    </Provider>
   // )
   // return (
   //    <Provider store={storeQuiz03}>
   //       <ProductList />
   //    </Provider>
   // )
   // return (
   //    <Provider store={storeQuiz04}>
   //       <NumberComponent />
   //    </Provider>
   // )
}

export default App
