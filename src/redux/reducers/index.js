
// reducers对象化
import { combineReducers } from 'redux'
import personReducer from './person_reducer'
import counterReducer from './counter_reducer'

export default combineReducers({

  count: counterReducer,
  person: personReducer,
})