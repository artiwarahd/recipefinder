export const SET_RECIPES = 'SET_RECIPES';
export const FAVORITE_RECIPE = 'FAVORITE_RECIPE';

export function setReceipes(items) {
  const action = {
    type: SET_RECIPES,
    items
  }

  return action;
}

export function favoriteRecipe(recipe) {
  const action = {
    type: FAVORITE_RECIPE,
    recipe
  }

  return action;
}