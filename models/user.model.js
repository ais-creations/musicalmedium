const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    // firstname: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    jobTitle: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    yearsOfExperience: {
        type: Number,
        required: true,
    },
    educationLevel: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    }
},  {
    timestamps: true,
});



const User = mongoose.model('User', UserSchema);
module.exports = User;