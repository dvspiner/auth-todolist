import { loginFailure, loginRequest, loginSuccess } from './auth.slice.ts'
import { call, put, takeLatest, CallEffect, PutEffect } from 'redux-saga/effects'
import { login } from '../../../api/authApi.ts'
import { AuthResponse } from '../../../types/authTypes.ts'

type AuthSagaGenerator<T> =
  T extends ReturnType<typeof loginSuccess>
    ? Generator<CallEffect<T> | PutEffect<ReturnType<typeof loginSuccess>>, void>
    : T extends ReturnType<typeof loginFailure>
      ? Generator<CallEffect<T> | PutEffect<ReturnType<typeof loginFailure>>, void>
      : unknown;

function* handleLogin(action: ReturnType<typeof loginRequest>): AuthSagaGenerator<AuthResponse> {
  try {
    const response = yield call(login, action.payload)
    console.log(response)
    yield put(loginSuccess(response))
  } catch (e) {
    console.log(e)
    yield put(loginFailure('Login failure'))
  }
}

export default function* authSaga() {
  yield takeLatest(loginRequest.type, handleLogin)
}