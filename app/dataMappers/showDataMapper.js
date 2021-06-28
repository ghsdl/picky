const fetch = require('node-fetch');

     /**
     * @typedef searchShows
     * @property {number} id - Unique identifier
     * @property {number} following - number of followers
     * @property {number} release_date - date of realisation
     * @property {string} svods - on which platform
     * @property {string} slug - slug title
     * @property {string} title - titles of shows
     */

module.exports = {
  async getAllShows() {
    try {
      const apiUrl =
        'https://api.betaseries.com/search/shows?limit=50&svods=1%2C2%2C3&="&key=e7da6c21d678&';
      
        // Affiche un résultat de 50 series sur les 3 plateformes (Netflix, Amazon Prime Video, OCS Go)
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

  async randomShows() {
    try {
      const apiUrl =
        "https://api.betaseries.com/shows/random?nb=5&=&key=e7da6c21d678&";
      // Methode qui affiche 5 series au hasard
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

  async searchShows(text) {
    
      const apiUrl = 'https://api.betaseries.com/search/shows?v=3.0',
      args = {
        'text': text,
        'limit': 10,
        'locale': "fr",
        'key': process.env.BETASERIES_API_KEY,
      },
      
      params = '&text=' + args.text.text + '&limit=' + args.limit + '&locale=' + args.locale + '&key=' + args.key;
      console.log(args)

    const result = apiUrl + params;
    console.log(result)
    

    const response = await fetch(result);

    let body = await response.json();
    if (!Array.isArray(body)) {
      body = [body];
      
      return body;
    }
  }
};
