const router = require('express').Router();
let Chat = require('../models/chat.model');


router.get('/:id', (req, res) => {
    Chat.find({toUserID: req.params.id})
        .then(chats => res.json(chats))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.post('/add/:id' , (req, res) => {
    const toUserID = req.params.id;
    const fromUserID = req.body.fromUserID;
    const message = req.body.message;
    const newChat = new Chat({
        toUserID,
        fromUserID,
        message
    });

    newChat.save()
        .then(() => res.json('Post added!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;
