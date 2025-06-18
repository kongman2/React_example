const initialState = { todos: [] }

function todoReducer(state = initialState, action) {
   switch (action.type) {
      case 'addTodo':
         // action = { type: 'addTodo', payload: '운동하기'}
         // 'addTodo'일때 초기값 todos리스트 안에 id와 text를 넣는다.
         // text: action.payload(inputValue값)
         // ★ todo리스트: 기존에 있던 데이터를 유지, 불변성을 유지 하기 위해 새로운 객체를 만들어서 반환
         return { todos: [...state.todos, { id: Date.now(), text: action.payload }] }
      case 'deleteTodo':
         // 'deleteTodo'일때 기존의 todos리스트에서 필터링한다. (todo.id와 action.payload(id)값이 같지 않을때만 필터링해 todos에 넣는다.)
         // 선택된 데이터를 삭제, 불변성 유지를 위해 새로운 객체를 만들어서 반환
         return { todos: state.todos.filter((todo) => todo.id !== action.payload) }
      default:
         return state
   }
}

export default todoReducer
