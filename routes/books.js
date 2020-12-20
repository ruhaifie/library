//ROUTES CONTROLLER

const express = require('express')
const router = express.Router()

const Book = require('../models/book') //models file

//REST api

//ALL books route
router.get('/', async (req, res) => {
   res.send('All Books')
})

//NEW book route
router.get('/new', (req, res) => {
   res.send('New Book')
})

//CREATE book route, POST route/request to server
router.post('/', async (req, res) => {
   res.send('Create book')
})

module.exports = router