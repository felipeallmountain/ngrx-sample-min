import { Action } from '@ngrx/store';

// Add name action
export const ADD_NAME = '[app][main]ADD_NAME';
export class AddNameAction implements Action {
  readonly type = ADD_NAME;
  constructor(public payload: string) {}
}

// clear list
export const CLEAR_NAMES = '[app][main]CLEAR_NAMES';
export class ClearNamesAction implements Action {
  readonly type = CLEAR_NAMES;
}

export type appAction = AddNameAction | ClearNamesAction;

