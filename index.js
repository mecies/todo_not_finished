const express = require("express");
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');

mongoose.connect('mongodb://localhost/applogin', {useNewUrlParser: true})
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
    let test = new TestModel({name: 'i am the tester'})
    test = await test.save();
}

addToDb();
app.listen(3000);

