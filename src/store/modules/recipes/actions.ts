import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { action } from 'typesafe-actions';
import apiRequest from '../../../services/apiRequest';
import { RecipesArray } from '../../../store1/modules/recipes/types';
import {
  Recipe,
  RecipesTypes,
  RecipesAction,
  LoadRequest,
  LoadSuccess,
  LoadFailure,
} from './types';

export const loadRequest = (): LoadRequest => action(RecipesTypes.LOAD_REQUEST);

export const loadSuccess = (data: Recipe[]): LoadSuccess => action(
  RecipesTypes.LOAD_SUCCESS, { data },
);

export const loadFailure = (): LoadFailure => action(RecipesTypes.LOAD_FAILURE);

export const loadFetch = (
  api: string,
): ThunkAction<Promise<RecipesAction>, unknown, unknown, AnyAction> => async (
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>,
): Promise<RecipesAction> => {
  dispatch(loadRequest());

  return apiRequest(api).then(
    (results: RecipesArray) => dispatch(loadSuccess(results.meals)),
    (_error) => dispatch(loadFailure()),
  );
};
