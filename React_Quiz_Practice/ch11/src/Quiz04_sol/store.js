import { createStore } from 'redux'
import itemReducer from './itemReducer' // 리듀서 파일에서 가져오기

//store에 reducer 저장
const store = createStore(itemReducer)

export default store
