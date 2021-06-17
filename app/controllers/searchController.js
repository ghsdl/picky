const searchDataMapper = require('../dataMappers/searchDataMapper.js');

const searchController = {

    searchAll : async (_, res) => {

        try {
            const query = req.params;
            const search = await searchDataMapper.searchAll(query);
            res.json(search);
            /*const search = await searchDataMapper.searchAll();
            res.json(search);*/
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },
}

module.exports = searchController;