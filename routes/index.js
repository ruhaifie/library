//setup all the routes inside here
const express = require('express'); //express variable
const router = express.Router(); //router variable

//above: set rule
//below use the set above

router.get('/', (req, res) => { //req = request res = respond
    //res.send('hello');
    res.render('index'); //index.ejs file // use res.render to load up an ejs view file
    //res.render() will look in a views folder for the view

});

module.exports = router; //display router, export info *router from this file