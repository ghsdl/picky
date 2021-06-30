const fetch = require('node-fetch');

module.exports = {

  /**
  * @typedef searchMovies
  * @property {number} id - Unique identifier
  * @property {number} following - number of followers
  * @property {number} release_date - date of realisation
  * @property {string} svods - on which platform
  * @property {string} title - titles of movies
  */

  async randomMovies() {
    try {
      // GETTING 5 RANDOM MOVIES -- TESTING THE API
      const apiUrl = 'https://api.betaseries.com/movies/random?nb=5&=&key=e7da6c21d678&';

      // USING NODE FETCH FOR THE API
      const response = await fetch(apiUrl);

      // IF ERROR WITH API THROW ERROR
      if (response.status !== 200) {
        throw new Error(`Erreur, veuillez ré-essayer ultérieurement.`);
      }

      // RESPONSE AS JSON 
      let body = await response.json();

      // VERIFYING IS RETURN IS AN ARRAY IF NOT ADDING IN AN ARRAY
      if (!Array.isArray(body)) {
        body = [body];
      }

      return body;
    } catch (error) {
      console.error(error);
    }
  },

  async searchMovies(text) {

    const apiUrl = 'https://api.betaseries.com/search/movies?v=3.0',
      args = {
        'text': text,
        'limit': 10,
        'key': process.env.BETASERIES_API_KEY,
      },
      params = '&text=' + args.text.text + '&limit=' + args.limit + '&key=' + args.key;
    const result = apiUrl + params;

    const response = await fetch(result);

    // IF ERROR WITH API THROW ERROR
    if (response.status !== 200) {
      throw new Error(`Erreur, veuillez ré-essayer ultérieurement.`);
    }

    let body = await response.json();
    if (!Array.isArray(body)) {
      body = [body];

      return body;
    }
  },

  async searchMovie(id) {

    const apiUrl = 'https://api.betaseries.com/movies/movie?v=3.0',
      args = {
        'id': id,
        'key': process.env.BETASERIES_API_KEY,
      },
      params = '&id=' + args.id.id + '&key=' + args.key;
    const result = apiUrl + params;

    const response = await fetch(result);

    // IF ERROR WITH API THROW ERROR
    if (response.status !== 200) {
      throw new Error(`Erreur, veuillez ré-essayer ultérieurement.`);
    }

    let body = await response.json();
    
    if (!Array.isArray(body)) {
      body = [body];

      return body;
    }
  },

};