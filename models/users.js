const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
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
    },
    google: {
        type: Boolean,
        default: false,
    },
    favoriteRestaurants: [{
        type: Schema.Types.ObjectId,
        ref: 'Restaurants',
        default: [],
    }],
},
{
    timestamps: true
}, 
{ versionKey: false });

const User = mongoose.model('Users', userSchema);

module.exports = { User };