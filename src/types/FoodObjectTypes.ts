export const SodaBase = {
  Coke: 'C',
  Sprite: 'S',
} as const;

export const SodaFlavor = {
  Plain: 'P',
  Lemon: 'L',
} as const;

export type SodaIngredients = {
  readonly base: keyof typeof SodaBase;
  readonly flavor: keyof typeof SodaFlavor;
};

export type SodaObject = {
  readonly type: 'soda';
  readonly ingredients: SodaIngredients;
};

export const SandwichBread = {
  'Country Loaf': 'L',
  'Wheat Torpedo Hoagie Roll': 'R',
  'Whole Wheat Bread': 'W',
} as const;
export const SandwichCheeses = {
  'Cheddar Cheese': 'C',
  'Mozzarella Cheese': 'M',
  'Provolone Cheese': 'P',
  'Vegan Cheddar Cheese': 'V',
  None: 'N',
} as const;
export const SandwichToppings = {
  'Avocado Pulp': 'A',
  Bacon: 'B',
  'Black Forest Ham': 'H',
  'Egg Salad': 'E',
  'Grilled Rosemary Chicken Breast': 'C',
  Pepperoni: 'P',
  Prosciutto: 'O',
  'Roast Beef': 'R',
  Turkey: 'T',
  None: 'N',
} as const;
export const SandwichAdons = {
  'Baby Spinach': 'S',
  Cucumber: 'C',
  'Mixed Peppers': 'M',
  Pepperoncini: 'E',
  Pickles: 'P',
  'Red Onion': 'R',
  'Romaine Lettuce': 'L',
  'Sliced Black Olives': 'O',
  'Sliced Jalepeno': 'J',
  Tomatoes: 'T',
  None: 'N',
} as const;
export const SandwichSpreads = {
  'Balsamic Vinegar': 'B',
  Mayonnaise: 'M',
  Mustard: 'U',
  'Olive Oil': 'O',
  'Olive Salad': 'S',
  'Pesto Sauce': 'P',
  'Red Wine Vinegar': 'R',
  'Sun Dried Tomato Pesto': 'T',
  None: 'N',
} as const;

export type SandwichIngredients = {
  readonly bread: keyof typeof SandwichBread;
  readonly cheese: keyof typeof SandwichCheeses;
  readonly topping_1: keyof typeof SandwichToppings;
  readonly topping_2: keyof typeof SandwichToppings;
  readonly adon_1: keyof typeof SandwichAdons;
  readonly adon_2: keyof typeof SandwichAdons;
  readonly adon_3: keyof typeof SandwichAdons;
  readonly spread: keyof typeof SandwichSpreads;
};

export type SandwichObject = {
  readonly type: 'sandwich';
  readonly ingredients: SandwichIngredients;
};

export type FoodObject = SandwichObject | SodaObject;
