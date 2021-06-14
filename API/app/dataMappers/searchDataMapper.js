const fetch = require("node-fetch");

const { BETASERIES_API_KEY } = process.env;
const API_URL = 'https://api.betaseries.com/search/all';

//const params = new URLSearchParams({});

const search = async query => {
  const url = new URL(API_URL)
  url.searchParams.set('query', query)
  url.searchParams.set('apikey', BETASERIES_API_KEY)
  const response = await fetch(url);

  const { 
    Response: success,
    Search: searchResults
  } = await response.json();

  return success === 'True' ? searchResults : []
}

/*const getTitle = async id => {
  const url = new URL(API_URL)
  url.searchParams.set('query', id)
  url.searchParams.set('key', BETASERIES_API_KEY)

  const response = await fetch(url)
  const { 
    Response: success,
    Error: error,
    ...title
  } = await response.json();

  if (success === 'True') {
    return title
  }

  throw new Error(error)
}*/

module.exports = { search };