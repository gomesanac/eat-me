import { Reducer } from 'redux';

import { RecipesState, RecipesTypes, RecipesAction } from './types';

const INITIAL_STATE: RecipesState = {
  data: [],
  error: false,
  loading: false,
};

const RecipesReducer: Reducer<RecipesState> = (
  state = INITIAL_STATE,
  action: RecipesAction,
) => {
  switch (action.type) {
    case RecipesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case RecipesTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true };
    case RecipesTypes.LOAD_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};

export default RecipesReducer;
