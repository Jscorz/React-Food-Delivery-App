import React from 'react';
import burger from './assets/burger.png';
import sushi from './assets/sushi.png';
import pho from './assets/steaming.png';
import pizza from './assets/pizza.png';

export const CardData = [
  {
    id: 1,
    img: burger,
    name: 'burger',
    description: 'with onion rings',
    price: 5.25,
  },
  {
    id: 2,
    img: pho,
    name: 'pho',
    description: 'steaming hot',
    price: 9.25,
  },
  {
    id: 3,
    img: pizza,
    name: 'pizza',
    description: 'homemade style',
    price: 15.25,
  },
  {
    id: 4,
    img: sushi,
    name: 'sushi',
    description: 'many varieties',
    price: 10.25,
  },
];
export default CardData;
