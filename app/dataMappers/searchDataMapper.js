const fetch = require("node-fetch");

module.exports = {
  /*async search(query) {

        const apiUrl = 'https://api.betaseries.com/search/all?v=3.0&query=${encodeURIComponent(query)}&key=e7da6c21d678';
        const response = await fetch(apiUrl);
        let body = await response.json();
        if (!Array.isArray(body)) {
          body = [body];
        }
        return body;
      },*/

  async searchAll(query) {
    const apiUrl = 'https://api.betaseries.com/search/all?v=3.0',
      args = {
        'query': query,
        'key': process.env.BETASERIES_API_KEY,
      },
      params = '&query=' + args.query + '&key=' + args.key;

    const result = apiUrl + params;

    const response = await fetch(result);

    let body = await response.json();
    if (!Array.isArray(body)) {
      body = [body];

      return body;
    }

    /*const apiUrl = 'https://api.betaseries.com/search/all?v=3.0&query=&key=e7da6c21d678';
        const response = await fetch(apiUrl);
        let body = await response.json();
        if (!Array.isArray(body)) {
          body = [body];
        }
        return body;*/
  },
};