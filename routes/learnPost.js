const router = require('express').Router();
let LearnPost = require('../models/learnPost.model');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const bcrypt = require('bcrypt')
const keys = require("../config/keys");


router.get('/', (req, res) => {
    LearnPost.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.post('/add', (req, res) => {
    const userID = req.body.userID;
    const title = req.body.title;
    const description = req.body.description;
    const currency = req.body.currency;
    const minBudget = req.body.minBudget;
    const maxBudget = req.body.maxBudget;
    const keywords = req.body.keywords;

    const newPost = new LearnPost({
        userID,
        title,
        description,
        keywords,
        currency,
        minBudget,
        maxBudget
    })

    newPost.save()
        .then(() => res.json('Post added!'))
        .catch(err => res.status(400).json('Error: ' + err));

})

router.delete('/:id', (req, res) => {
    LearnPost.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;