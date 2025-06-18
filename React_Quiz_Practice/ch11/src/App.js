import { Provider } from 'react-redux'

// import storeQuiz01 from './Quiz01/store'
// import Login from './Quiz01/Login'

import storeQuiz02 from './Quiz02/store'
import NumberComponent from './Quiz02/NumberComponent'

// import storeQuiz03 from './Quiz03/store'
// import TodoComponent from './Quiz03/TodoComponent'

function App() {
   // return (
   //    <Provider store={storeQuiz01}>
   //       <Login />
   //    </Provider>
   // )
   return (
      <Provider store={storeQuiz02}>
         <NumberComponent />
      </Provider>
   )
   // return (
   //    <Provider store={storeQuiz03}>
   //       <TodoComponent />
   //    </Provider>
   // )
}

export default App
