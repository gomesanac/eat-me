import { Action, Dispatch } from 'redux';
import apiRequest from '../../services/apiRequest';
import {
  Recipe, RecipesArray, RecipesTypes, RecipeActionType,
} from './types';

export const loadRequest = (): Action => ({
  type: RecipesTypes.LOAD_REQUEST,
});

export const loadSuccess = (data: Recipe[]): RecipeActionType => ({
  type: RecipesTypes.LOAD_SUCCESS,
  data,
});

export const loadFailure = (): Action => ({
  type: RecipesTypes.LOAD_FAILURE,
});

// export const loadFetch = (api: string) => (dispatch: Dispatch) => {
//   dispatch(loadRequest());

//   return apiRequest(api).then(
//     (result: RecipesArray) => dispatch(loadSuccess(result.meals)),
//     (_error) => dispatch(loadFailure()),
//   );
// };
