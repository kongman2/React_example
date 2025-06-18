const initialState = {
   number: 1,
}

function numberReducer(state = initialState, action) {
   switch (action.type) {
      case 'MULTIPLY':
         return {
            ...state,
            number: state.number * action.payload,
         }
      case 'RESET':
         return {
            ...state,
            number: 1,
         }
      default:
         return state
   }
}

export default numberReducer
