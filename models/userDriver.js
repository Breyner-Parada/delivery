const mongoose = require('mongoose');
const { Schema } = mongoose;

const userDriver = new Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    image: {
        type: String,
    },
    phone_number: {
        type: String,
    }
},
{
    timestamps: true
}, 
{ versionKey: false });

const UserDriver = mongoose.model('UserDriver', userDriver);

module.exports = { UserDriver };