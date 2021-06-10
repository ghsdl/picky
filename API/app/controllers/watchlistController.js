
const dataMapper = require('../dataMappers/dataMapper');


const watchlistController = {

  allWatchList: async (req, res) => {
    try {
      const data = await dataMapper.getWatchList()
      res.json({data})
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },


  addWatchList: async (req, res) => {
    console.log(req)
    try {
        
        const data = await dataMapper.addWatchList(req.body);
        console.log(data)
        res.json({ data });
    } catch (error) {
  
        console.error(error);
        res.status(500).json({ error: `Une erreur serveur est survenue, merci de réessayer ultérieurement` });
  
    }
    
  },

  deleteOne: async (req, res) => {

    const id = req.params.id

    try {
      const data = await dataMapper.deleteWatchList(id)
      res.json({data})
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString())
    }
  }

}

module.exports = watchlistController;



