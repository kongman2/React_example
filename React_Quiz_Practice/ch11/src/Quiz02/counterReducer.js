const initialState = { count: 0 }

function counterReducer(state = initialState, action) {
   // 증가
   // action = { type: 'increment' }
   // state= { count: 0 }

   //감소
   // action = { type: 'decrement' }
   // state= { count: 1 }

   switch (action.type) {
      case 'increment':
         //  return 하면 state= { count: 1 }
         return { count: state.count + 1 }
      case 'decrement':
         //  return 하면 state= { count: 0 }
         return { count: state.count - 1 }
      default:
         return state
   }
}

export default counterReducer
