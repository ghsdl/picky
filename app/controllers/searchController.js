// REQUIRING SEARCH DATAMAPPER 
const searchDataMapper = require('../dataMappers/searchDataMapper.js');

const searchController = {
    searchAll: async (req, res) => {
        try {
            // GETTING THE URL PARAMETER
            const query = req.params;

            // SEARCHING EVERYTHING FROM THIRD PARTY API
            const search = await searchDataMapper.searchAll(query);
            
            res.json(search);
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },

    mood: async (req, res) => {
        try {
            // DESTRUCTURING REQ.BODY
            const { ShowOrMovie, emotions, platforms } = req.body;

            // SEARCHING DEPENDING ON USER INPUT FROM THIRD PARTY API
            const moodresults = await searchDataMapper.results({
                ShowOrMovie,
                emotions,
                platforms
            });

            res.json(moodresults);
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    }
}

module.exports = searchController;