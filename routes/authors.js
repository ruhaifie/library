const express = require('express')
const router = express.Router()
const Author = require('../models/author')

//REST api

//ALL authors route
router.get('/', async (req, res) => {
    let searchOptions = {}
    //if query not equal null and if empty string no filter
    if (req.query.name != null && req.query.name !== '') {
        //learn more: regular expression, i which means case insensitive
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try {
        const authors = await Author.find(searchOptions)
        res.render('authors/index', {
            authors: authors,
            searchOptions: req.query
        })
    } catch {
        res.redirect('/')
    }
})

//NEW author route
router.get('/new', (req, res) => {
    //http://localhost:27017/authors/new
    res.render('authors/new', {
        author: new Author()
    })
})

//CREATE author, POST route/request to server
router.post('/', async (req, res) => {
    /* res.send('Create') //this send blank page text */

    const author = new Author({
        /* .name: input body:form send to server. when type send to server and display at browser */
        /* tell server which parameter to accept from client */
        name: req.body.name
    })
    try {
        //everyting in moongoDB doing asynchronously so need to use await in order to asynchronously call to complete
        const newAuthor = await author.save()
        //res.redirect(`authors/${newAuthor.id}`)
        res.redirect(`authors`)
    } catch {
        res.render('authors/new', {
            author: author,
            errorMessage: 'Error creating Author'
        })
    }

    //replace callback using moongose with async await 
    /* author.save((err, newAuthor) => {
        //save author using save method on author object
        if (err) {
            //if error render new page again
            res.render('authors/new', {
                //pass parameter (author) back to new page, re appear so dont type again 
                author: author,
                errorMessage: 'Error creating Author'
            })
        } else {
            //redirect to intended author page 
            //res.redirect(`authors/${newAuthor.id}`)
            res.redirect(`authors`)
        }
    }) */

    //res.send(req.body.name) no longer needed
})

module.exports = router