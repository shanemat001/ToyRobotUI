import { all, call, put, select, take, takeEvery, takeLatest, actionChannel } from 'redux-saga/effects';
import * as types from '../actions/types';
import { ENDPOINT } from '../constants';

function* placeRobot(action) {
  try {
    const { robot } = action;
    const result = yield axios.post(`${ENDPOINT}`, robot).then(response => response.data);
    yield put({ type: types.PLACE_ROBOT_SUCCESS, data: result });
  } 
  catch (error) {
    yield put({ type: types.PLACE_ROBOT_FAILED, error });
  }
}

function* moveRobot(action) {
  try {
    const { movements, id } = action;
    const result = yield axios.patch(`${ENDPOINT}${id}`, movements).then(response => response.data);
    yield put({ type: types.MOVE_ROBOT_SUCCESS, data: result });
  } 
  catch (error) {
    yield put({ type: types.MOVE_ROBOT_FAILED, error });
  }
}

function* getRobotState(action) {
  try {
    const { id } = action;
    const result = yield axios.get(`${ENDPOINT}${id}`).then(response => response.data);
    yield put({ type: types.ROBOT_STATE_RECEIVED, data: result });
  }
  catch (error) {
    yield put({ type: types.ROBOT_STATE_REQUEST_FAILED, error });
  }
}

export function* rootSaga() {
  yield all([
    takeLatest(types.PLACE_ROBOT, placeRobot),
    takeLatest(types.MOVE_ROBOT, moveRobot),
    takeLatest(types.GET_ROBOT_STATE, getRobotState),
  ])
}



// export function* moveRobot(movements) {
//   try {
//     const endpoint = 'http://localhost:5000/api/robot';
//     const response = yield call(fetch, endpoint);
//     const data = yield response.json();
//     yield put({ type: types.MOVE_ROBOT_SUCCESS, state: data });
//   }
//   catch (error) {
//     yield put({ type: types.MOVE_ROBOT_FAILED, error });
//   }
// }

// export function* getRobotState() {
//   try {
//     const endpoint = 'http://localhost:5000/api/robot';
//     const response = yield call(fetch, endpoint);
//     const data = yield response.json();
//     yield put({ type: types.ROBOT_STATE_RECEIVED, state: data });
//   }
//   catch (error) {
//     yield put({ type: types.ROBOT_STATE_REQUEST_FAILED, error });
//   }
// }
