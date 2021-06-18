// Import npm
import React from 'react';

// Import of components
import Card from 'src/containers/Card';

// Import of scss
import './cards.scss';

// Display of the cards
const Cards = ({movies, shows, loading, currentPage}) => {
  console.log('loading:', loading);
  if (loading === true) {
    return (
    <p>Loading</p>)
  }

  if (loading === false) {
    if (currentPage==="home") {
      return (
        // TODO: make the display of the cards dynamic with a map
        <div className="cards">
        {console.log('movies in Cards component', movies)}
        {console.log('shows in Cards component', shows)}
        {movies.map((movie) => (
          <Card
            title={movie.title ? movie.title : "Friends"}
            key= {movie.id ? movie.id : 1}
          />
        ))}
        </div>
      );
    } else {
      return (
        // TODO: make the display of the cards dynamic with a map
        <div className="cards">
        <Card title="Friends" />
        <Card title="Friends" />
        <Card title="Friends" />
        </div>
      );
    }
  }
};

export default Cards;
