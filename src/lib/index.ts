import { FoodObject } from '../types/FoodObjectTypes';

import { sandwichIngredientsToStr, sandwichStrToIngredients } from './sandwich';
import { sodaIngredientsToStr, sodaStrToIngredients } from './soda';

export const FoodIdRegexp = /([a-z]+)\+([^+]+)/;
export const FoodIdRegexpGroups = { type: 1, ingredients: 2 };

export function idToObject(id: string): FoodObject | undefined {
  const matches = FoodIdRegexp.exec(id);
  // Failed to match, return undefined
  if (matches === null) return undefined;
  // Matched soda and right number of ingredients,
  //  return a soda object or undefined if ingredients are bad
  if (
    matches[FoodIdRegexpGroups.type] === 'soda' &&
    matches[FoodIdRegexpGroups.ingredients].length == 2
  ) {
    const ingredients = sodaStrToIngredients(
      matches[FoodIdRegexpGroups.ingredients]
    );
    if (ingredients)
      return {
        type: 'soda',
        ingredients: ingredients,
      };
    return undefined;
  }
  // Matched sandwich and rigth number of ingredients,
  //  return a soda object or undefined if ingredients are bad
  if (
    matches[FoodIdRegexpGroups.type] === 'sand' &&
    matches[FoodIdRegexpGroups.ingredients].length == 8
  ) {
    const ingredients = sandwichStrToIngredients(
      matches[FoodIdRegexpGroups.ingredients]
    );
    if (ingredients)
      return {
        type: 'sandwich',
        ingredients: ingredients,
      };
    return undefined;
  }

  return undefined;
}

export function objectToId(obj: FoodObject): string | undefined {
  switch (obj.type) {
    case 'soda': {
      const ingredients = sodaIngredientsToStr(obj.ingredients);
      if (ingredients) return 'soda+' + ingredients;
      return undefined;
    }
    case 'sandwich': {
      const ingredients = sandwichIngredientsToStr(obj.ingredients);
      if (ingredients) return 'sand+' + ingredients;
      return undefined;
    }
    default:
      return undefined;
  }
}
