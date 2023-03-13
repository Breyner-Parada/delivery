const mongoose = require('mongoose');
const { Schema } = mongoose;

const featuredSchema = new Schema({
    featuredName: {
        type: String,
        required: true,
    },
    shortDescription: {
        type: String,
        required: true,
    },
    restaurants: [{
        type: Schema.Types.ObjectId,
        ref: 'Restaurants',
    }],
}, 
{
    timestamps: true
},  
{ versionKey: false });

const Featured = mongoose.model('Featured', featuredSchema);

module.exports = { Featured };