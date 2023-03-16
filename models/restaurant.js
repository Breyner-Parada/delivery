const mongoose = require('mongoose');

const { Schema } = mongoose;

const restaurantSchema = new Schema({
    restaurantName: {
        type: String,
        required: true,
    },
    shortDescription: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    lat: Number, //elimninar cuando se reinicie la base de datos
    lng: Number, //elimninar cuando se reinicie la base de datos
    address: {
        type: String,
        required: true,
    },
    rating: {
        type: [Number],
        min: 1,
        max: 5,
        default: 0,
    },
    categories: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
    },
    dishes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dish',
    }],
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'UserRestaurant',
    },
    restaurantToken: [{
        type: String,
    }],
    phone_number: {
        type: String,
    }
}, 
{
    timestamps: true,
}, { versionKey: false });

const Restaurant = mongoose.model('Restaurants', restaurantSchema);

module.exports = { Restaurant };


