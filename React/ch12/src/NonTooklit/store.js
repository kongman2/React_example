import { createStore } from 'redux'
import counterReducer from './counterReducer' // 리듀서 파일에서 가져오기

//store에 reducer저장
const store = createStore(counterReducer)

export default store
