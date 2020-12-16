import { RecipesArray } from '../store/modules/recipes/types';

const apiRequest = (api: string): Promise<RecipesArray> => fetch(api).then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

export default apiRequest;
