const initialState = { items: [] }

function itemReducer(state = initialState, action) {
   switch (action.type) {
      case 'ADD_ITEM':
         return {
            items: [...state.items, { id: Date.now(), name: action.payload }],
         }
      case 'DELETE_ITEM':
         return {
            items: state.items.filter((item) => item.id !== action.payload),
         }
      default:
         return state
   }
}

export default itemReducer
