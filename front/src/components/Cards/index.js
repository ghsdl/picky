// Import npm
import React from 'react';

// Import of components
import Card from 'src/containers/Card';

// Import of scss
import './cards.scss';

// Display of the cards
const Cards = ({movies, shows, loading, currentPage, results, programswish }) => {
  {// When the results are loading, "Loading" is displayed
  }
  if (loading === true) {
    return (
    <p className="cards">Loading</p>
    )
  }
  {// When the results are not loading anymore, they are displayed
  }
  if (loading === false) {
    {// If the current page is home (Picky Find), the results displayed depend on the request of
      // the API
    }
    if (currentPage==="home") {
      return (
        // TODO: make the display of the cards dynamic with a map
        <div className="cards">
        {// The movies are displayed
        }
        {movies.map((movie) => (
          <Card
            title={movie.title}
            poster={movie.poster}
            platformsInfos={movie.svods}
            key= {movie.id}
          />
        ))}
        {// The shows are displayed
        }
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
      {// If the current page is not home (Picky Find), the results are not dynamic yet
      }
    } else if (currentPage === 'wish') {
      return (
      <div className="cards">
      {programswish.map((program) => (
        <Card
          title={program.title}
          poster={program.poster}
          platformsInfos={program.platform}
          key= {program.id}
        />
      ))}
      </div>
      );

    } else if(currentPage === "mood") {
      if(results.length === 0) {
        return (
          <p className="cards">Il n'y a aucun résultat pour votre recherche</p>
        )
      } else {
        return (
          <div className="cards">
            {// The programs are displayed
            }
            {results.map((result) => (
              <Card
                title={result.title}
                poster={result.poster}
                platformsInfos={result.svods}
                key= {result.id}
              />
            ))}
            </div>
        )
      }
    } else {

      const friendsVod= [{id: 1, name: "Netflix"}];
      return (
        // TODO: make the display of the cards dynamic with a map
        <div className="cards">
        <Card 
          title="Friends"
          poster="https://images.affiches-et-posters.com//albums/3/50249/affiche-friends-.jpg"
          platformsInfos={friendsVod}
        />
        <Card 
          title="Friends"
          poster="https://images.affiches-et-posters.com//albums/3/50249/affiche-friends-.jpg"
          platformsInfos={friendsVod}
        />
        <Card 
          title="Friends"
          poster="https://images.affiches-et-posters.com//albums/3/50249/affiche-friends-.jpg"
          platformsInfos={friendsVod}
        />
        </div>
      );
    }
  }
};

export default Cards;
