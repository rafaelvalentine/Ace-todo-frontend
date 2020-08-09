import User from './UserReducer'
import Loading from './pageLoaderReducer'
import List from './TodoListReducer'
import Todo from './TodoReducer'  
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
  User,
  Loading,
  List,
  Todo
})

export default rootReducers