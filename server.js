const express = require("express");
const mongo = require('mongodb');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('flash');
const session = require('express-session');
const ejs = require('ejs');

const users = require('./routes/users');

const {DBurl, port} = require('./configDB');

const app = express();

// login: maciek
// password: todolist1
mongoose.connect( DBurl, {
    useNewUrlParser: true
})
.then(()=> console.log('connected to mlab'))
.catch(err => console.error('Could not connect to mlab', err));

// middlewares
app.use(express.json());
app.use('/collections/users', users);
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./public'));
app.set('view engine', 'ejs');

app.listen(port, ()=> console.log('listening on port ' + port));

