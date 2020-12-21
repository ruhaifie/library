//ROUTES CONTROLLER

const express = require('express')
const router = express.Router()

const Book = require('../models/book') //models file
const Author = require('../models/author') //models file

//REST api

//ALL books route
router.get('/', async (req, res) => {
   res.send('All Books')
})

//NEW book route
router.get('/new', async (req, res) => {
   try {
      const authors = await Author.find({})
      const book = new Book()
      res.render('books/new', {
         authors: authors,
         book: book
      })
   } catch {
      res.redirect('/books')
   }

   /* res.send('New Book') //to test the page direction */
})

//CREATE book route, POST route/request to server
router.post('/', async (req, res) => {
   const book = new Book ({
      title: req.body.title,
      author: req.body.author,
      publishDate: new Date(req.body.publishDate),
      pageCount: req.body.pageCount,
      description: req.body.description
   })
})

module.exports = router