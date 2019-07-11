import { all } from 'redux-saga/effects';

import homeRootSaga from './home/sagas';

function* rootSaga() {
  yield all([homeRootSaga()]);
}

export default rootSaga;
