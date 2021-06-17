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
/*
  async addToBookmark( query) {
    console.log("second log de query", query);
    const apiUrl = 'https://api.betaseries.com/search/all?v=3.0',
      args = {
        'query': query,
        'key': process.env.BETASERIES_API_KEY,
      },
      params = '&query=' + args.query.query + '&key=' + args.key;
      console.log(params);

    const result = apiUrl + params;
    console.log("log de result", result);

    const response = await fetch(result);

    let body = await response.json();
    if (!Array.isArray(body)) {
      body = [body];
      console.log("log de body", body);
      
      return body;
    }
    const data = JSON.parse(body);
    const bookmark = data.bookmark || '';

    const res = await pool.query(`INSERT INTO "bookmark" ("betaseries_id", "title", "platform", "poster", "member_id") VALUES ($1,$2,$3,$4,$5) RETURNING *`, 
    [bookmark.betaseries_id, bookmark.title, bookmark.platform, bookmark.poster, bookmark.member_id]);
        return res.rows[0];

  },*/


  async searchAll(query) {
    console.log("second log de query", query);
    const apiUrl = 'https://api.betaseries.com/search/all?v=3.0',
      args = {
        'query': query,
        'key': process.env.BETASERIES_API_KEY,
      },
      params = '&query=' + args.query.query + '&key=' + args.key;
      console.log(params);

    const result = apiUrl + params;
    console.log("log de result", result);

    const response = await fetch(result);

    let body = await response.json();
    if (!Array.isArray(body)) {
      body = [body];
      console.log("log de body", body);
      
      return body;
    }

    /*const apiUrl = 'https://api.betaseries.com/search/all?v=3.0&query=&key=e7da6c21d678';
        const response = await fetch(apiUrl);
        let body = await response.json();
        if (!Array.isArray(body)) {
          body = [body];
        }
        return body;*/
  }
};