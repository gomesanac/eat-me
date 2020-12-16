import { Reducer } from 'redux';

import { FiltersState, FiltersTypes, FiltersAction } from './types';

const INITIAL_STATE: FiltersState = {
  filter: '',
  search: '',
  searching: false,
};

const FiltersReducer: Reducer<FiltersState> = (
  state = INITIAL_STATE,
  action: FiltersAction,
) => {
  switch (action.type) {
    case FiltersTypes.OPEN_FILTER:
      return { ...state, searching: true };
    case FiltersTypes.CLOSE_FILTER:
      return { ...state, searching: false };
    case FiltersTypes.FILTER_DATA:
      return {
        ...state,
        filter: action.payload.filter,
        search: action.payload.search,
        searching: true,
      };
    default:
      return state;
  }
};

export default FiltersReducer;
