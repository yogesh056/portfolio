import { combineReducers } from 'redux'

import audioReducer from './audioReducer'
import modalReducer from './modalReducer'

const rootReducer = combineReducers({
  audio: audioReducer,
  modal: modalReducer,
})

export default rootReducer
