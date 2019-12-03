import * as types from '../actions/types';

export default function robotReducer(state = { isLoading: false }, action = null) {

  switch (action.type) {

    case types.PROCESS_COMMAND:
      return { ...state, isLoading: true };

    case types.PROCESS_COMMAND_SUCCESS:
      return { ...state, isLoading: false, result: action.data };

    case types.PROCESS_COMMAND_FAILED:
      return { ...state, isLoading: false, error: action.error };

    default:
      return state;
  }
}
