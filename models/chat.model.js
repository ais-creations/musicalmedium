const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
    fromUserID: {
        type: String,
        required: true
    },
    toUserID: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});

const Chat = mongoose.model('Chat', ChatSchema);
module.exports = Chat;