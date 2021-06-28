const fetch = require("node-fetch");

module.exports = {

    /**
     * @typedef searchAll
     * @property {number} id - Unique identifier
     * @property {number} thetvdb_id - identifier tv data base
     * @property {string} imdb_id - identifier
     * @property {string} title - titles of shows
     * @property {string} seasons - show's season
     * @property {string} episodes - show's episode
     * @property {string} followers - show's followers
     * @property {string} creation - creation date
     * @property {string} resource_url - show's poster
     * @property {number} id - Unique identifier
     * @property {string} title - titles of movies
     * @property {string} tmdb_id - identifier 
     * @property {string} imdb_id - identifier
     * @property {string} followers - movies's followers
     * @property {string} production_year - creation date
     * @property {string} resource_url - movies's poster
     */

  async searchAll(query) {
    const apiUrl = 'https://api.betaseries.com/search/all?v=3.0',
      args = {
        'query': query,
        'key': process.env.BETASERIES_API_KEY,
      },
      params = '&query=' + args.query.query + '&key=' + args.key;

    const result = apiUrl + params;

    const response = await fetch(result);

    let body = await response.json();

    if (!Array.isArray(body)) {
      body = [body];
      return body;
    }
  },

  async results(moodresults) {
    const multipleEmotions = moodresults.emotions;
    const multipleSvods = moodresults.platforms;
    const obj = [];

    if (multipleEmotions.length !== 0) {

      const result = [];

      const modulo = "%2C";

      for (const emotion of multipleEmotions) {
        const apiUrl = 'https://api.betaseries.com/search/';

        const params = moodresults.ShowOrMovie + '?v=3.0' + '&genres=' + emotion

        if (multipleSvods.length === 1) {
          const svods = '&svods=' + multipleSvods[0] + '&key=' + process.env.BETASERIES_API_KEY;
         
          result.push(apiUrl + params + svods);

        } else {
          
          const firstIndexOfSvods = multipleSvods[0];
          const multipleSvodsWithModulo = multipleSvods.map( svods => modulo + svods);
          multipleSvodsWithModulo.splice(0,1, firstIndexOfSvods);

          const allSvods = multipleSvodsWithModulo.join('');

          const svods = '&svods=' + allSvods + '&key=' + process.env.BETASERIES_API_KEY;

          result.push(apiUrl + params + svods);

        }
      }

      for (const url of result) {
        const response = await fetch(url);
        let body = await response.json();
        obj.push(body);
      }
    }
    return obj;
  }
};
