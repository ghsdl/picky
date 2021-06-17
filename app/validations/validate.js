const validate = {

  queryString: (schema) => {
    return async (req, res, next) => {
      try {
        await schema.validateAsync(req.query);
        next();
      } catch (error) {
        return res.status(400).json({error: `1.Access denied.`});
      }
    };
  },

  body: (schema) => {
    return async (req, res, next) => {
      try {
        await schema.validateAsync(req.body);
        next();
      } catch (error) {
        return res.status(400).json({error: `2.Access denied.`});
      }
    };
  },

  params: (schema) => {
    return async (req, res, next) => {
      try {
        await schema.validateAsync(req.params);
        next();
      } catch (error) {
        return res.status(400).json({error: `3.Access denied.`});
      }
    };
  },

};

module.exports = validate;