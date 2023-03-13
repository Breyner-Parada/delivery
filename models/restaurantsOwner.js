const mongoose = require('mongoose');
const { Schema } = mongoose;

const userRestaurantSchema = new Schema({
    sub: {
        type: String,
        unique: [true, 'User already exists'],
    }, // Borrar cuando se reinicie la base de datos
    username: {
        type: String,
        required: true,
    },
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurants',
        default: null,
    },
    image: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'Email already exists'],
    },
}, 
{
    timestamps: true
}, 
{ versionKey: false });

const UserRestaurant = mongoose.model('UserRestaurant', userRestaurantSchema);

module.exports = { UserRestaurant };