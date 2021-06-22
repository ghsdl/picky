const { 
    insertSchema: memberInsertSchema, 
    updateSchema: memberUpdateSchema,
}  = require('./memberSchema');

const { 
    insertSchema: bookmarkInsertSchema
}  = require('./bookmarkSchema');

module.exports = { memberInsertSchema, memberUpdateSchema, bookmarkInsertSchema };