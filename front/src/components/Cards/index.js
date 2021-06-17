// Import npm
import React from 'react';

// Import of components
import Card from 'src/containers/Card';

// Import of scss
import './cards.scss';

// Display of the cards
const Cards = ({programs}) => (
  // TODO: make the display of the cards dynamic with a map
  <div className="cards">
  {console.log('programs in Cards component', programs)}
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
);

export default Cards;
