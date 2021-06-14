const validate = {

  queryString: (schema) => {
    return async (req, res, next) => {
      try {
        await schema.validateAsync(req.query);
        next();
      } catch (error) {
        return res.status(400).json({error: `1.Resource not found.`});
      }
    };
  },

  body: (schema) => {
    return async (req, res, next) => {
      try {
        await schema.validateAsync(req.body);
        next();
      } catch (error) {
        return res.status(400).json({error: `2.Resource not found.`});
      }
    };
  },

  params: (schema) => {
    return async (req, res, next) => {
      try {
        await schema.validateAsync(req.params);
        next();
      } catch (error) {
        return res.status(400).json({error: `3.Resource not found.`});
      }
    };
  },

};

module.exports = validate;