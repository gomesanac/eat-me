export const searchAllRecipesEndpoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

export const searchByIngredientsEndpoint = (ingredient: string): string => `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

export const seractByNameEndpoint = (name: string): string => `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
