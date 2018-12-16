const mongoose = require('mongoose');
const Joi = require('joi');

const User = mongoose.model('user', new mongoose.Schema({
        name: {
            type: String,
            required: true,
            unique: true,
            minlength: 5,
            maxlength: 50

        },
        password: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 1024

        }
    }))

function validateUser(user){
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        password: Joi.string().min(5).max(1024).required()
    }
    return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;