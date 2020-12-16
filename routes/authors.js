const express = require('express')
const Author = require('../models/author')
const router = express.Router()

//REST api

//all authors route
router.get('/', (req, res) => {
    res.render('authors/index')
})

//new author route
router.get('/new', (req, res) => {
    res.render('authors/new', {
        author: new Author()
    })
    /* http://localhost:27017/authors/new */
})

//create author route, POST route/request to server
router.post('/', (req, res) => {
    res.send('Create')
})

module.exports = router