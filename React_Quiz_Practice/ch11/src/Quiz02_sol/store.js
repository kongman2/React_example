// store.js
import { createStore } from 'redux'
import numberReducer from './numberReducer'

const store = createStore(numberReducer)

export default store
