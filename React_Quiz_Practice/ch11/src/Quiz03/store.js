import { createStore } from 'redux'
import todoReducer from './todoReducer' // 리듀서 파일에서 가져오기

//store에 reducer 저장
const store = createStore(todoReducer)

export default store
