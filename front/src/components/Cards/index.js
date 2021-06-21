// Import npm
import React from 'react';

// Import of components
import Card from 'src/containers/Card';

// Import of scss
import './cards.scss';

// Display of the cards
const Cards = ({movies, shows, loading, currentPage}) => {
  if (loading === true) {
    return (
    <p>Loading</p>)
  }

  if (loading === false) {
    if (currentPage==="home") {
      return (
        // TODO: make the display of the cards dynamic with a map
        <div className="cards">
        {movies.map((movie) => (
          <Card
            title={movie.title}
            poster={movie.poster}
            platformsInfos={movie.svods}
            key= {movie.id}
          />
        ))}
        {shows.map((show) => (
          <Card
            title={show.title}
            poster={show.poster}
            platformsInfos={show.svods}
            key= {show.id}
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
