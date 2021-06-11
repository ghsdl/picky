const fetch = require('node-fetch');
const client = require('../../database.js')

module.exports = {

    async getAllMovies() {
        try {
            const apiUrl = 'https://api.betaseries.com/search/movies?limit=50&svods=1%2C2%2C3&="&key=e7da6c21d678&';
            
            // Affiche un résultat de 50 films sur les 3 plateformes (Netflix, Amazon Prime Video, OCS Go)
            const response = await fetch(apiUrl)
            
            let body = await response.json();
            if (!Array.isArray(body)) {
                body = [body];
            }
            console.log(body)
            return body;
        } catch (error) {
            console.error(error);
        }
    },

    async getAllSeries() {
      try {
          const apiUrl = 'https://api.betaseries.com/search/shows?limit=50&svods=1%2C2%2C3&="&key=e7da6c21d678&';
          // Affiche un résultat de 50 series sur les 3 plateformes (Netflix, Amazon Prime Video, OCS Go)
          const response = await fetch(apiUrl)
          let body = await response.json();
          if (!Array.isArray(body)) {
              body = [body];
          }
          console.log(body);
          return body;
      } catch (error) {
          console.error(error);
      }
  },
  
  async randomSeries() {
    try {
        const apiUrl = 'https://api.betaseries.com/shows/random?nb=5&=&key=e7da6c21d678&';
        // Methode qui affiche 5 series au hasard
        const response = await fetch(apiUrl)
        let body = await response.json();
        if (!Array.isArray(body)) {
            body = [body];
        }
        console.log(body);
        return body;
    } catch (error) {
        console.error(error);
    }
},

async randomMovies() {
  try {
      const apiUrl = 'https://api.betaseries.com/movies/random?nb=5&=&key=e7da6c21d678&';
      // Methode qui affiche 5 series au hasard
      const response = await fetch(apiUrl)
      let body = await response.json();
      if (!Array.isArray(body)) {
          body = [body];
      }
      console.log(body);
      return body;
  } catch (error) {
      console.error(error);
  }
},

getWatchList: async () => {
  const data = await client.query(`SELECT * FROM "watchlist" `);
  console.log(data);
  return data.rows;

},

addWatchList: async watchlist  => {
  
  const data = await client.query(`INSERT INTO "watchlist" ("betaseries_id", "title", "provider", "poster") VALUES($1, $2, $3, $4) RETURNING *`, 
  [watchlist.betaseries_id, watchlist.title, watchlist.provider, watchlist.poster]);
  console.log(data);
  return data.rows[0];

},




deleteWatchList: async (id) => {
  const data = await client.query(`DELETE FROM "member_has_watchlist" WHERE id=$1`, [id]);
  console.log(data)
  
}

/*insertPost: async post => {
  // RETURNING * ici aura le même résultat qu'un SELECT *
  // Il va insérer et retourné l'ensemble des champs de l'enregistrement fraîchement inséré
  const result = await client.query(`INSERT INTO "post" (title, slug, excerpt, content, category_id) VALUES($1, $2, $3, $4, $5) RETURNING *`, 
  [post.title, post.slug, post.excerpt, post.content, post.categoryId]);

  return result.rows[0];
}*/





}
