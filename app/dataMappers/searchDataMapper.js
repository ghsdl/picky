const fetch = require("node-fetch");

module.exports = {

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
    const multipleEmotions = moodresults.movieEmotions;
    const multipleSvods = moodresults.platforms;
    const obj = [];

    if (multipleEmotions.length !== 0 && multipleSvods.length !==0) {

      const result = [];

      for (const emotion of multipleEmotions) {
        const apiUrl = 'https://api.betaseries.com/search/';

        const params = moodresults.ShowOrMovie + '?v=3.0' + '&genres=' + emotion + '&svods=' + moodresults.platforms + '&key=' + process.env.BETASERIES_API_KEY;

        result.push(apiUrl + params);
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