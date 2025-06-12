const initialState = { todos: [] }

function todoReducer(state = initialState, action) {
   switch (action.type) {
      case 'add':
         return { todos: [...state.todos, { id: Date.now(), text: action.payload }] }
      case 'delete':
         return { todos: state.todos.filter((todo) => todo.id !== action.payload) }
      default:
         return state
   }
}

export default todoReducer
