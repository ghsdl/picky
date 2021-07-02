const fetch = require('node-fetch');

module.exports = {
     /**
     * @typedef searchShows
     * @property {number} id - Unique identifier
     * @property {number} following - number of followers
     * @property {number} release_date - date of realisation
     * @property {string} svods - on which platform
     * @property {string} slug - slug title
     * @property {string} title - titles of shows
     */
  
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
        'key': process.env.BETASERIES_API_KEY,
      },
      
      params = '&text=' + args.text.text + '&limit=' + args.limit +  '&key=' + args.key;

    const result = apiUrl + params;

    const response = await fetch(result);

    let body = await response.json();

    if (!Array.isArray(body)) {
      body = [body];
      
      return body;
    }
  },

  async oneShow(id) {
    
    const apiUrl = 'https://api.betaseries.com/shows/display?v=3.0',

    args =  {
      'id': id,
      'key': process.env.BETASERIES_API_KEY,
    },

    params = '&id=' + args.id.id + '&key=' + args.key;
    
    const result = apiUrl + params;

    const response = await fetch(result);

    let body = await response.json();

    if (!Array.isArray(body)) {
      body = [body];
      
      return body;
    }
  }

};
