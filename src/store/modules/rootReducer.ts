import { combineReducers } from 'redux';

import RecipesReducer from './recipes/reducer';
import FiltersReducer from './filters/reducer';

export default combineReducers({ RecipesReducer, FiltersReducer });
