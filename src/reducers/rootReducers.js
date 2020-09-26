import { combineReducers } from 'redux'
import museumReducer from './museumReducer'
import reviewReducer from './reviewReducer'

const rootReducers = combineReducers({
  museumReducer,
  reviewReducer
})

export default rootReducers
