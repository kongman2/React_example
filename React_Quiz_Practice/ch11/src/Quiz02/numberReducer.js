const initialState = { number: 1 }

function numberReducer(state = initialState, action) {
   switch (action.type) {
      case 'multiplication':
         return {
            number: state.number * action.payload,
         }
      case 'initialization':
         return { ...state, number: 1 }
      default:
         return state
   }
}

export default numberReducer
