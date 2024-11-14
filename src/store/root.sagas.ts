import authSaga from '../views/auth/redux/auth.sagas'
import { all } from 'redux-saga/effects'
import signUpSaga from '../views/auth/redux/sign-up.sagas'
import accountSaga from '../views/account/account.sagas'
import usersSagas from '../views/todolist/redux/sagas'

export default function* rootSagas() {
  yield all([
    authSaga(),
    signUpSaga(),
    accountSaga(),
    ...usersSagas,
  ])
}