import test from 'ava';

import { idToObject, objectToStr } from '.';
import { FoodObject } from '../types/FoodObjectTypes';

test('parse soda', (t) => {
  const test_string = 'soda+SP';
  t.deepEqual(idToObject(test_string), {
    type: 'soda',
    ingredients: {
      base: 'Sprite',
      flavor: 'Plain',
    },
  });
});

test('parse sandwich', (t) => {
  const test_string = 'sand+WVPRENNP';
  t.deepEqual(idToObject(test_string), {
    type: 'sandwich',
    ingredients: {
      bread: 'Whole Wheat Bread',
      cheese: 'Vegan Cheddar Cheese',
      topping_1: 'Pepperoni',
      topping_2: 'Roast Beef',
      adon_1: 'Pepperoncini',
      adon_2: 'None',
      adon_3: 'None',
      spread: 'Pesto Sauce',
    },
  });
});

test('bad food type', (t) => {
  const test_string = 'pie+WVPRENNP';

  t.is(idToObject(test_string), undefined);
});

test('wrong number of arguments', (t) => {
  t.is(idToObject('soda+WVPRENNP'), undefined);
  t.is(idToObject('sand+WVPRP'), undefined);
});

test('sandwich object to string', (t) => {
  const test_obj: FoodObject = {
    type: 'sandwich',
    ingredients: {
      bread: 'Whole Wheat Bread',
      cheese: 'Vegan Cheddar Cheese',
      topping_1: 'Pepperoni',
      topping_2: 'Roast Beef',
      adon_1: 'Pepperoncini',
      adon_2: 'None',
      adon_3: 'None',
      spread: 'Pesto Sauce',
    },
  };
  t.is(objectToStr(test_obj), 'sand+WVPRENNP');
});

test('soda object to string', (t) => {
  const test_obj: FoodObject = {
    type: 'soda',
    ingredients: {
      base: 'Sprite',
      flavor: 'Plain',
    },
  };
  t.is(objectToStr(test_obj), 'soda+SP');
});
