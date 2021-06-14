const dataMapper= require("../dataMappers/memberDataMapper");

const memberController = {

  async get(req, res) {
    const id = req.params.id
    try {
      const data = await dataMapper.getMember(id)
      res.json({data})
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString())
    }
  },

  async update(req, res) {
    const id = req.params.id
    
    const {pseudo, email, password, profile_picture} = req.body;
    console.log(req.body)
    try {
      const data = await dataMapper.updateMember(id, pseudo, email, password, profile_picture );
      console.log('log de data', data)

      if (!data) {
          // si pas de member -> 404
          res.status(404).json(`Can't find this member with id ` + id);
      } else {

          if (pseudo) {
            data.pseudo = pseudo;
          };
          if (email){
            data.email = email
          };
          if (password){
            data.password = password
          };
          if (profile_picture){
            data.password = profile_picture
          };
          


        
          await data.save();


      res.json({data})

      }
      
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString())
    }
  },

  async delete(req, res) {
    const id = req.params.id
    try {
      const data = await dataMapper.deleteMember(id)
      res.json({data})
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString())
    }
  }

}

module.exports = memberController
