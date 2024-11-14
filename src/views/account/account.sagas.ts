import { call, CallEffect, put, PutEffect, takeLatest } from 'redux-saga/effects'
import { fetchAuthMe } from '../../api/authApi'
import { fetchMeFailure, fetchMeRequest, fetchMeSuccess } from './account.slice'
import { AuthResponse } from '../auth/types/auth.types'

type AuthSagaGenerator<T> =
  T extends ReturnType<typeof fetchMeSuccess>
    ? Generator<CallEffect<T> | PutEffect<ReturnType<typeof fetchMeSuccess>>, void>
    : T extends ReturnType<typeof fetchMeFailure>
      ? Generator<CallEffect<T> | PutEffect<ReturnType<typeof fetchMeFailure>>, void>
      : unknown;

function* handleFetchMe(): AuthSagaGenerator<AuthResponse> {
  try {
    const response = yield call(fetchAuthMe)
    yield put(fetchMeSuccess(response))
  } catch (e) {
    yield put(fetchMeFailure('Fetch me failure'))
    throw new Error(JSON.stringify(e))
  }
}

export default function* accountSaga() {
  yield takeLatest(fetchMeRequest.type, handleFetchMe)
}