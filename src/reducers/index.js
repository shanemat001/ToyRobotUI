import * as types from '../actions/types';

export default function robotReducer(state = { isLoading: false }, action = null) {

  switch (action.type) {

    case types.PLACE_ROBOT:
      return { ...state, isLoading: true };

    case types.PLACE_ROBOT_SUCCESS:
      return { ...state, isLoading: false, result: action.data };

    case types.PLACE_ROBOT_FAILED:
      return { ...state, isLoading: false, error: action.error };

    case types.MOVE_ROBOT:
      return { ...state, isLoading: true };

    case types.MOVE_ROBOT_SUCCESS:
      return { ...state, isLoading: false, result: action.data };

    case types.MOVE_ROBOT_FAILED:
      return { ...state, isLoading: false, error: action.error };

    case types.GET_ROBOT_STATE:
      return { ...state, isLoading: true };

    case types.ROBOT_STATE_RECEIVED:
      return { ...state, isLoading: false, result: action.data };

    case types.ROBOT_STATE_REQUEST_FAILED:
      return { ...state, isLoading: false, error: action.error };

    default:
      return state;
  }
}
