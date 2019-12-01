import * as types from './actionTypes';

export function placeRobot(robot) {
  return { type: types.PLACE_ROBOT, robot };
}

export function moveRobot(movements, id) {
  return { type: types.MOVE_ROBOT, movements, id };
}

export function getRobotState(id) {
  return { type: types.GET_ROBOT_STATE, id };
}
