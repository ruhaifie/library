//MODELS - handle data logic, interact with database

/* snippet -> req */
const mongoose = require('mongoose')

/* create Schema for book*/
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    publishDate: {
        type: Date,
        required: true
    },
    pageCount: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    coverImageName: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, //refrence of IDobject of author
        required: true,
        ref: 'Author' //match name with module
    }
})

//Book is title, bookSchema is variable
module.exports = mongoose.model('Book', bookSchema)