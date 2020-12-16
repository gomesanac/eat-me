import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './modules/rootReducer';
import { FiltersState } from './modules/filters/types';
import { RecipesState } from './modules/recipes/types';

export interface ApplicationState {
  RecipesReducer: RecipesState;
  FiltersReducer: FiltersState;
}

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(thunk));

export default store;
