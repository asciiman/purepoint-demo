import {
  FETCH_RECIPES,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_ERROR,
} from '../constants/recipes';

export function fetchRecipes(searchText) {
  return {
    type: FETCH_RECIPES,
    searchText,
  };
}

export function fetchRecipesSuccess(data, page) {
  return {
    type: FETCH_RECIPES_SUCCESS,
    data,
    page,
  };
}

export function fetchRecipesError(error) {
  return {
    type: FETCH_RECIPES_ERROR,
    error,
  };
}
