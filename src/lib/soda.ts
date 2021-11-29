import {
  SodaBase,
  SodaFlavor,
  SodaIngredients,
} from '../types/FoodObjectTypes';

import { flip } from './utils';

export function sodaStrToIngredients(
  ingredients_string: string
): SodaIngredients | undefined {
  const base = flip(SodaBase)[ingredients_string.charAt(0)] as
    | keyof typeof SodaBase
    | undefined;
  const flavor = flip(SodaFlavor)[ingredients_string.charAt(1)] as
    | keyof typeof SodaFlavor
    | undefined;
  if (base === undefined || flavor === undefined) return undefined;
  return {
    base,
    flavor,
  };
}

export function sodaIngredientsToStr(
  ingredients: SodaIngredients
): string | undefined {
  const base = SodaBase[ingredients.base];
  const flavor = SodaFlavor[ingredients.flavor];
  if (base === undefined || flavor === undefined) return undefined;
  return base + flavor;
}
