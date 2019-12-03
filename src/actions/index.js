import {PROCESS_COMMAND} from './types';

export function processCommand(commandText) {
  return { type: PROCESS_COMMAND, commandText };
}