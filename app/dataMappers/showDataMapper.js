const fetch = require('node-fetch');

module.exports = {
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
      console.log(body);

    if (!Array.isArray(body)) {
      body = [body];
      
      return body;
    }
  }
};
