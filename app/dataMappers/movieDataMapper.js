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
      const apiUrl = 'https://api.betaseries.com/movies/random?nb=5&=&key=e7da6c21d678&';
      // Methode qui affiche 5 series au hasard
      const response = await fetch(apiUrl)
      let body = await response.json();
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

  let body = await response.json();
  if (!Array.isArray(body)) {
    body = [body];
    
    return body;
  }
}
};


