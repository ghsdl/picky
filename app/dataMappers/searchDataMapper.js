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

      async search() {

        const apiUrl = 'https://api.betaseries.com/search/all?v=3.0&query=&key=e7da6c21d678';
        const response = await fetch(apiUrl);
        let body = await response.json();
        if (!Array.isArray(body)) {
          body = [body];
        }
        return body;
    }
 
};
