const mongoose = require('mongoose');
const { Schema } = mongoose;

const orders = new Schema({
    products: {
        type: Object,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    createdBy: {
        type: Object,
        required: true,
    },
    socket: {
        type: String,
        required: true,
    },
    toRestaurant: {
        type: Object,
        required: true,
    },
    state: {
        type: String,
    },
},
    {
        timestamps: true
    },
    { versionKey: false}
);

const Orders = mongoose.model('Orders', orders);

module.exports = { Orders };