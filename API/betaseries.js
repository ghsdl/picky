const fetch = require('node-fetch');

(async () => {
    try {
        const result = await fetch('https://api.betaseries.com/search/movies?key=e7da6c21d678&');
        const body = await result.json();
    } catch (error) {
        console.error(error);
    }
})();
