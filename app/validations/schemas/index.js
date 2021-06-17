const {  
    insertSchema: memberInsertSchema,
    updateSchema: memberUpdateSchema,
} = require('./memberSchema');

const { 
    insertSchema : bookmarkInsertSchema
} = require('./bookmarkSchema');

const { 
    insertSchema : platformInsertSchema
} = require('./platformSchema');

module.exports = { memberInsertSchema, memberUpdateSchema, bookmarkInsertSchema, platformInsertSchema };