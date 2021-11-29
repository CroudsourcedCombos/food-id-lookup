import {
  SandwichAdons,
  SandwichBread,
  SandwichCheeses,
  SandwichIngredients,
  SandwichSpreads,
  SandwichToppings,
} from '../types/FoodObjectTypes';

import { flip } from './utils';

export function sandwichStrToIngredients(
  ingredients_string: string
): SandwichIngredients | undefined {
  const bread = flip(SandwichBread)[ingredients_string.charAt(0)] as
    | keyof typeof SandwichBread
    | undefined;
  const cheese = flip(SandwichCheeses)[ingredients_string.charAt(1)] as
    | keyof typeof SandwichCheeses
    | undefined;
  const topping_1 = flip(SandwichToppings)[ingredients_string.charAt(2)] as
    | keyof typeof SandwichToppings
    | undefined;
  const topping_2 = flip(SandwichToppings)[ingredients_string.charAt(3)] as
    | keyof typeof SandwichToppings
    | undefined;
  const adon_1 = flip(SandwichAdons)[ingredients_string.charAt(4)] as
    | keyof typeof SandwichAdons
    | undefined;
  const adon_2 = flip(SandwichAdons)[ingredients_string.charAt(5)] as
    | keyof typeof SandwichAdons
    | undefined;
  const adon_3 = flip(SandwichAdons)[ingredients_string.charAt(6)] as
    | keyof typeof SandwichAdons
    | undefined;
  const spread = flip(SandwichSpreads)[ingredients_string.charAt(7)] as
    | keyof typeof SandwichSpreads
    | undefined;
  if (
    bread === undefined ||
    cheese === undefined ||
    topping_1 === undefined ||
    topping_2 === undefined ||
    adon_1 === undefined ||
    adon_2 === undefined ||
    adon_3 === undefined ||
    spread === undefined
  )
    return undefined;
  return {
    bread,
    cheese,
    topping_1,
    topping_2,
    adon_1,
    adon_2,
    adon_3,
    spread,
  };
}

export function sandwichIngredientsToStr(
  ingredients: SandwichIngredients
): string | undefined {
  const bread = SandwichBread[ingredients.bread];
  const cheese = SandwichCheeses[ingredients.cheese];
  const topping_1 = SandwichToppings[ingredients.topping_1];
  const topping_2 = SandwichToppings[ingredients.topping_2];
  const adon_1 = SandwichAdons[ingredients.adon_1];
  const adon_2 = SandwichAdons[ingredients.adon_2];
  const adon_3 = SandwichAdons[ingredients.adon_3];
  const spread = SandwichSpreads[ingredients.spread];
  if (
    bread === undefined ||
    cheese === undefined ||
    topping_1 === undefined ||
    topping_2 === undefined ||
    adon_1 === undefined ||
    adon_2 === undefined ||
    adon_3 === undefined ||
    spread === undefined
  )
    return undefined;
  return (
    bread + cheese + topping_1 + topping_2 + adon_1 + adon_2 + adon_3 + spread
  );
}
