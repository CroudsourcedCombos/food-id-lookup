import test from 'ava';

import { SandwichIngredients } from '../types/FoodObjectTypes';

import { sandwichIngredientsToStr, sandwichStrToIngredients } from './sandwich';

test('parse sandwitch str to ingredients', (t) => {
  const test_str = 'LCABSTNO';
  t.deepEqual(sandwichStrToIngredients(test_str), {
    bread: 'Country Loaf',
    cheese: 'Cheddar Cheese',
    topping_1: 'Avocado Pulp',
    topping_2: 'Bacon',
    adon_1: 'Baby Spinach',
    adon_2: 'Tomatoes',
    adon_3: 'None',
    spread: 'Olive Oil',
  });
});

test('parse sandwich ingredients to str', (t) => {
  const test_obj: SandwichIngredients = {
    bread: 'Wheat Torpedo Hoagie Roll',
    cheese: 'Mozzarella Cheese',
    topping_1: 'Grilled Rosemary Chicken Breast',
    topping_2: 'None',
    adon_1: 'Mixed Peppers',
    adon_2: 'Romaine Lettuce',
    adon_3: 'Red Onion',
    spread: 'Sun Dried Tomato Pesto',
  };

  t.is(sandwichIngredientsToStr(test_obj), 'RMCNMLRT');
});
