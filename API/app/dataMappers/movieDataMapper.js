const fetch = require('node-fetch');

module.exports = {

  async getAllMovies() {
    try {
      const apiUrl = 'https://api.betaseries.com/search/movies?limit=50&svods=1%2C2%2C3&="&key=e7da6c21d678&';

      // Affiche un résultat de 50 films sur les 3 plateformes (Netflix, Amazon Prime Video, OCS Go)
      const response = await fetch(apiUrl)

      let body = await response.json();
      if (!Array.isArray(body)) {
        body = [body];
      }
      console.log(body)
      return body;
    } catch (error) {
      console.error(error);
    }
  },

  async randomMovies() {
    try {
      const apiUrl = 'https://api.betaseries.com/movies/random?nb=5&=&key=e7da6c21d678&';
      // Methode qui affiche 5 series au hasard
      const response = await fetch(apiUrl)
      let body = await response.json();
      if (!Array.isArray(body)) {
        body = [body];
      }
      console.log(body);
      return body;
    } catch (error) {
      console.error(error);
    }
  },

  async genreMovies() {
    try {
      const apiUrl = 'https://api.betaseries.com/movies/genres?key=e7da6c21d678';
      // Methode qui affiche 5 series au hasard
      const response = await fetch(apiUrl)
      let body = await response.json();
      if (!Array.isArray(body)) {
        body = [body];
      }
      console.log(body);
      return body;
    } catch (error) {
      console.error(error);
    }
  },

  
};


