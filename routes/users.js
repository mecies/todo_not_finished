const {User, validate} = require('../models/user')
const express = require('express');
const router = express.Router();

router.get('/collections/users/:id', async (req, res) => {



})

router.post('/', async (req, res) => {
    //jesli  user nie spelnia kryteriow z funkcji joi validate 
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // jesli user juz jest zarejestrowany
    let user = await User.findOne({name: req.body.name});
    if (user) return res.status(400).send('user already registered')

    // jesli wszystko git 
    user = new User({
        name: req.body.name,
        password: req.body.password
    })

    user = await user.save();
    res.send(user)

})

module.exports = router;
