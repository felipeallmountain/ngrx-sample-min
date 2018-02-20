import * as actions from './actions';

export interface IAppStore {
  names: string[];
  ages: number[];
}

export const initialState: IAppStore = {
  names: [],
  ages: []
};

export function appReducer(
  state: IAppStore = initialState,
  action: actions.appAction
): IAppStore {

  switch (action.type) {
    case actions.ADD_NAME:
      return addNameReducer(state, action);

    case actions.CLEAR_NAMES:
      return clearNamesReducer(state, action);

    default:
      return state;
  }
}

function addNameReducer(
  state: IAppStore,
  action: actions.AddNameAction
): IAppStore {
  return Object.assign({}, state, {
    names: [...state.names, action.payload]
  });
}

function clearNamesReducer(
  state: IAppStore,
  action: actions.ClearNamesAction
): IAppStore {
  return Object.assign({}, state, {
    names: []
  });
}


