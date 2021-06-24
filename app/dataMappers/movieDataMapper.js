const fetch = require('node-fetch');

module.exports = {
  async getAllMovies() {
    try {
      const apiUrl =
        'https://api.betaseries.com/search/movies?limit=50&svods=1%2C2%2C3&="&key=e7da6c21d678&';

      // Affiche un résultat de 50 films sur les 3 plateformes (Netflix, Amazon Prime Video, OCS Go)
      const response = await fetch(apiUrl);

      let body = await response.json();
      if (!Array.isArray(body)) {
        body = [body];
      }
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


