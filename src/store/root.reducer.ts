import { combineReducers } from 'redux'
import authReducer from '../views/auth/redux/auth.slice'
import signUpReducer from '../views/auth/redux/sign-up.slice'
import accountReducer from '../views/account/account.slice'
import todoReducer from '../views/todolist/redux/reducer'

const rootReducer = combineReducers({
  account: accountReducer,
  auth: authReducer,
  todo: todoReducer,
  signUp: signUpReducer,
})
export default rootReducer