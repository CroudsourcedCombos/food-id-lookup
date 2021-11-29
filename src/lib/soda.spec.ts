import test from 'ava';

import { SodaIngredients } from '../types/FoodObjectTypes';

import { sodaIngredientsToStr, sodaStrToIngredients } from './soda';

test('parse soda str to ingredients', (t) => {
  const test_string = 'CL';
  t.deepEqual(sodaStrToIngredients(test_string), {
    base: 'Coke',
    flavor: 'Lemon',
  });
});

test('parse soda ingredients to str', (t) => {
  const test_obj: SodaIngredients = {
    base: 'Coke',
    flavor: 'Lemon',
  };

  t.is(sodaIngredientsToStr(test_obj), 'CL');
});
