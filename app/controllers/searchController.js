const searchDataMapper = require('../dataMappers/searchDataMapper.js');

const searchController = {

    searchAll : async (req, res) => {
        try {
            const query = req.params;
            console.log(query);
            const search = await searchDataMapper.searchAll(query);
            res.json(search);
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },

    mood: async (req, res) => {
        try {
            const { ShowOrMovie, movieEmotions, platforms } = req.body;
            
            const moodresults = await searchDataMapper.results({
                ShowOrMovie, 
                movieEmotions, 
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