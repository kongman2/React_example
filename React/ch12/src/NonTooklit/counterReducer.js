const initialState = { value: 0 }

// action = { type: 'up', step: 2 }
function counterReducer(state = initialState, action) {
   switch (action.type) {
      case 'up':
         return { ...state, value: state.value + action.step }
      case 'down':
         return { ...state, value: state.value - action.step }
      default:
         return state
   }
}

export default counterReducer
