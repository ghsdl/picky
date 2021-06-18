const validate = {

  queryString: (schema) => {
    return async (req, res, next) => {
      try {
        await schema.validateAsync(req.query);
        next();
      } catch (error) {
        return res.status(400).json({error: `Access denied.`});
      }
    };
  },

  body: (schema) => {
    return async (req, res, next) => {
      try {
        await schema.validateAsync(req.body);
        next();
      } catch (error) {
        return res.status(400).json({password: `Veuillez vérifier que les deux mots de passe sont identiques.`, error:`Access denied.`});
      }
    };
  },

  params: (schema) => {
    return async (req, res, next) => {
      try {
        await schema.validateAsync(req.params);
        next();
      } catch (error) {
        return res.status(400).json({error: `Access denied.`});
      }
    };
  },

};

module.exports = validate;