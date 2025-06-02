import { Provider } from 'react-redux'
// import Counter from './NonTooklit/Counter'
// import storeNonToolkit from './NonTooklit/store'
import Counter from './UseToolkit/Counter'
import storeUseToolkit from './UseToolkit/store'
import User from './UseToolkit/User'

function App() {
   // return (
   //    <Provider store={storeNonToolkit}>
   //       <div>
   //          <Counter />
   //       </div>
   //    </Provider>
   // )

   return (
      <Provider store={storeUseToolkit}>
         <div>
            <Counter />
            <User />
         </div>
      </Provider>
   )
}

export default App
