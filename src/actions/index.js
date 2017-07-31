export const SET_RECIPES = 'SET_RECIPES';

export function setReceipes(items) {
  const action = {
    type: SET_RECIPES,
    items
  }

  return action;
}