const express = require("express");
const app = express();
const mongo = require('mongodb');
const mongoose = require('mongoose');
const passport = require('passport');
// login: maciek
//password: todolist1
mongoose.connect('mongodb://maciek:todolist1@ds123852.mlab.com:23852/todo-project', {
    useNewUrlParser: true
})
.then(()=> console.log('connected to mongo db'))
.catch(err => console.error('Could not connect to MongoDB', err));


const testSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})


const TestModel = mongoose.model('test', testSchema)

//dodawanie lokalnie do mongo db
async function addToDb(){
    let test = new TestModel({name: 'hejka ja marcines nowy w bazie'})
    test = await test.save();
}

async function getTest(){
    const test = await TestModel
    .find({ name: 'i am the tester' }) // returns doc query object kinda like ap romise
    
    console.log(test);
}
 addToDb();
//branch maciej

//getTest();
//app.listen(3000);

