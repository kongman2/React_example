const initialState = {
   isAuthenticated: false,
   user: null,
}

function authReducer(state = initialState, action) {
   switch (action.type) {
      case 'LOGIN':
      // 여기에 코드 작성
      case 'LOGOUT':
      // 여기에 코드 작성
      default:
         return state
   }
}

export default authReducer
