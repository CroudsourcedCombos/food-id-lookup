import test from 'ava';

import { SodaBase } from '../types/FoodObjectTypes';

import { flip } from './utils';

test('flip', (t) => {
  const obj = {
    A: 1,
    B: 2,
    C: 3,
  };
  const obj_flipped = {
    1: 'A',
    2: 'B',
    3: 'C',
  };
  t.like(flip(obj), obj_flipped);
});

test('flip SodaBase', (t) => {
  t.deepEqual(flip(SodaBase), {
    C: 'Coke',
    S: 'Sprite',
  });
});
