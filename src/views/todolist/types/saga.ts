import { fetchTodoListFailure, fetchTodoListSuccess } from '../redux/actions.ts'
import { CallEffect, PutEffect } from 'redux-saga/effects'

export

type TodoListSagaGenerator<T> =
  T extends ReturnType<typeof fetchTodoListSuccess>
    ? Generator<CallEffect<T> | PutEffect<ReturnType<typeof fetchTodoListSuccess>>, void>
    : T extends ReturnType<typeof fetchTodoListFailure>
      ? Generator<CallEffect<T> | PutEffect<ReturnType<typeof fetchTodoListFailure>>, void>
      : unknown;
