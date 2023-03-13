const {Featured} = require('../models/featured');
const mongoose = require('mongoose');

const getFeatured = async (req, res) => {
    try {
        const featured = await Featured.find();
        res.status(200).send(featured);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getFeaturedById = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No featured with that id');
    try {
        const featured = await Featured.findById(id).populate({path: 'restaurants', populate: {path: 'dishes'}});
        res.status(200).send(featured);
    } catch (error) {
        res.status(500).send(error);
    }
}

const createFeatured = async (req, res) => {
    const featured = new Featured(req.body);
    try {
        await featured.save();
        res.status(201).send(featured);
    } catch (error) {
        res.status(500).send(error);
    }
}

const updateFeatured = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No featured with that id');
    const body = req.body;
    try {
        const featured = await Featured.findByIdAndUpdate(id, body, {new: true});
        res.status(200).send(featured);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteFeatured = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No featured with that id');
    try {
        const featured = await Featured.findByIdAndDelete(id);
        res.status(200).send(featured);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = { getFeatured, getFeaturedById, createFeatured, updateFeatured, deleteFeatured };