const mongoose = require('mongoose');
const { Schema } = mongoose;

const dishSchema = new Schema({
    dishName: {
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
    price: {
        type: Number,
        required: true,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'UserRestaurant',
    },
    
},
{
    timestamps: true
}, 
{ versionKey: false });

const Dish = mongoose.model('Dish', dishSchema);

module.exports = { Dish };