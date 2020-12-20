//MODELS - handle data logig, interact with database

/* snippet -> req */
const mongoose = require('mongoose')

/* create Schema for author*/
const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        /* if other than string,re render page */
        required: true /* validator of schemaType */
    }
})

/* name of module:Author, pass the schema which define the table: authorSchema */
/* to create new authors of application */
module.exports = mongoose.model('Author', authorSchema)