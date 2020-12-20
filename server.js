if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config(); //use config() instead of .parse() & load()
}
//to load from .env file & import to process inside this server.js

// load the package/library we need
const express = require('express'); //to use express library
const app = express();
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

/* router */
const indexRouter = require('./routes/index'); //file path to view index.js
const authorRouter = require('./routes/authors')
const bookRouter = require('./routes/books')

//above is set of rule/variable/path
//below is: process use from rule from above
//setup route here

app.set('view engine', 'ejs'); // set the view engine to ejs
app.set('views', __dirname + '/views'); //folder views
app.set('layout', 'layouts/layout'); //folder views/layouts/layout.ejs

app.use(expressLayouts); //use from const expressLayouts
app.use(express.static('public')); //folder public

//tell express how to use the body parser library
//send the value via url to server
//set limit server can accept
app.use(bodyParser.urlencoded({
    limit: '10mb',
    extended: false
}))


//how to setup mongoDB
const mongoose = require('mongoose'); //setup variable to use mongoose library
mongoose.connect(process.env.DATABASE_URL, { //set up connection for database, URL for connection, connect to local mongo DB server, variable for database URL
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection; //setup log to use below
db.on('error', error => console.error(error)); //print error    //i think 'error' 'open ' is the event
db.once('open', () => console.log('Connected to Mongoose')); //run db for first time

//const url = 'mongodb://127.0.0.1:27017/mybrary';
/* http://localhost:27017/ */

/* use the routes */
app.use('/', indexRouter); //use indexRouter show the file path 
app.use('/authors', authorRouter)
app.use('/books', bookRouter)

//want app to listen to port, env = environment
app.listen(process.env.PORT || 27017); //node server, port 27017