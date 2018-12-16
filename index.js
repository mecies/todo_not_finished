const express = require("express");
const app = express();
const mongo = require('mongodb');
const mongoose = require('mongoose');
const passport = require('passport');
const users = require('./routes/users')
// login: maciek
//password: todolist1


mongoose.connect('mongodb://maciek:todolist1@ds123852.mlab.com:23852/todo-project', {
    useNewUrlParser: true
})
.then(()=> console.log('connected to mlab'))
.catch(err => console.error('Could not connect to mlab', err));

app.use(express.json());
app.use('/collections/users', users)


app.listen(3000, ()=> console.log('listening'))

