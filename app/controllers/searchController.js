const searchDataMapper = require('../dataMappers/searchDataMapper.js');

const searchController = {

    searchShows : async (_, res) => {

        try {
           /*const query = req.query;
            const shows = await searchDataMapper.searchAllShows(query);
            res.json(shows);*/
            const shows = await searchDataMapper.searchAllShows();
            res.json(shows);
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },
}

module.exports = searchController;