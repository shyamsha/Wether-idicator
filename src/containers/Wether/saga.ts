import { wetherError, wetherSuccess } from './actions';
import { Action } from "redux";
import { put,call, takeLatest, all, fork } from "redux-saga/effects";
import * as Api from "../../services/Api";
import { unknownError } from "../../utils/api-helper";
import { WetherActionTypes, WetherParams } from './types';

type SagaAction<T> = Action & { payload: T };

function* wether({ payload: params }: SagaAction<WetherParams>) {
  try {
    const res = yield call(Api.testWether,params)
    if (res.error) {
      yield put(wetherError(res.error));
    } else {
      yield put(wetherSuccess(res));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(wetherError(err));
    } else {
      yield put(wetherError(unknownError("An unknown error occured")));
    }
  }
}

function* watchFetchRequest() {
    yield takeLatest(WetherActionTypes.WETHER_REQUEST, wether);
  }

  export function* wetherSaga() {
    yield all([fork(watchFetchRequest)]);
  }
