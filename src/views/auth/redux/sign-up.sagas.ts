import { call, CallEffect, put, PutEffect, takeLatest } from 'redux-saga/effects'
import { signUpFailed, signUpRequest, signUpSuccess } from './sign-up.slice'
import { signUp } from '../../../api/authApi'
import { SingUpResponse } from '../types/sign-up.types'


type SignUpSagaGenerator<T> =
  T extends ReturnType<typeof signUpSuccess>
    ? Generator<CallEffect<T> | PutEffect<ReturnType<typeof signUpSuccess>>, void>
    : T extends ReturnType<typeof signUpFailed>
      ? Generator<CallEffect<T> | PutEffect<ReturnType<typeof signUpFailed>>, void>
      : unknown;


function* handleSingUp(action: ReturnType<typeof signUpRequest>): SignUpSagaGenerator<SingUpResponse> {
  try {
    yield  call(signUp, action.payload)
    yield put(signUpSuccess())
  } catch (e) {
    console.log(e)
    yield put(signUpFailed('Reigster failure'))
  }

}

export default function* signUpSaga() {
  yield takeLatest(signUpRequest.type, handleSingUp)
}