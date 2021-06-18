// Import npm
import React from 'react';

// Import of components
import Card from 'src/containers/Card';

// Import of scss
import './cards.scss';

// Display of the cards
const Cards = ({movies, shows}) => (
  // TODO: make the display of the cards dynamic with a map
  <div className="cards">
  {console.log('movies in Cards component', movies)}
  {console.log('shows in Cards component', shows)}
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
