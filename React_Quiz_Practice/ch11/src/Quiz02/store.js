import { createStore } from 'redux'
import counterReducer from './counterReducer' // 리듀서 파일에서 가져오기

const store = createStore(counterReducer)

export default store
