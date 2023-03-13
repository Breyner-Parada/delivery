const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
    categoryName: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
},
{
    timestamps: true
},  
{ versionKey: false});

const Category = mongoose.model('Category', categorySchema);

module.exports = { Category };