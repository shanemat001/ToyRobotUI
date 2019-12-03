import { all, call, put, select, take, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../actions/types';
import { ENDPOINT } from '../constants';

function* processCommand(action) {
  try {
    const { commandText } = action;
    if (commandText) {
      let commands = commandText.split(" ");
      let result;
      let id = 0;

      if (commands[0] == "PLACE") {
        result = yield axios.post(`${ENDPOINT}`, { "CommandText": commandText }).then(response => response.data);
      }
      else if (commands[0] == "MOVE") {
        result = yield axios.put(`${ENDPOINT}/${id}`, { "CommandText": commandText }).then(response => response.data);
      }
      else if (commands[0] == "REPORT" && commands.length ==1) {
        result = yield axios.get(`${ENDPOINT}/${id}`).then(response => response.data);
      }
      yield put({ type: types.PROCESS_COMMAND_SUCCESS, data: result });
    }
  }
  catch (error) {
    yield put({ type: types.PROCESS_COMMAND_FAILED, error });
  }
}

export default function* rootSaga() {
  yield all([takeEvery(types.PROCESS_COMMAND, processCommand)]);
}

