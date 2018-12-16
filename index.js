const express = require("express");
const app = express();
const mongo = require('mongodb');
const mongoose = require('mongoose');
const passport = require('passport');
// login: maciek
//password: todolist1

app.use(express.json());

mongoose.connect('mongodb://maciek:todolist1@ds123852.mlab.com:23852/todo-project', {
    useNewUrlParser: true
})
.then(()=> console.log('connected to mlab'))
.catch(err => console.error('Could not connect to mlab', err));


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})


const UserModel = mongoose.model('user', userSchema)

//dodawanie lokalnie do mongo db
// async function addToDb(){
//     let user = new UserModel({name: 'newUser'})
//     user = await user.save();
// }

// async function getUser() {
//     const user = await UserModel
//         .find({ name: 'newUser' }) // returns doc query object kinda like ap romise

//     console.log(user);
// }


app.post('/collections/users', async (req, res) => {
    let user = new UserModel({
        name: req.body.name
    })
    user = await user.save();
    res.send(user)

})

app.listen(3000, ()=> console.log('listening'))

