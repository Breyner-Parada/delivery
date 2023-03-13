const {UserRestaurant} = require('../models/restaurantsOwner');
const mongoose = require('mongoose');

const getAllRestaurantsOwner = async (req, res) => {
    try {
        const restaurantsOwner = await UserRestaurant.find();
        res.status(200).send(restaurantsOwner);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getRestaurantsOwnerById = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No restaurant owner with that id');
    try {
        const restaurantsOwner = await UserRestaurant.findById(id).populate('restaurant');
        res.status(200).send(restaurantsOwner);
    } catch (error) {
        res.status(500).send(error);
    }
}

const createRestaurantsOwner = async (req, res) => {
    const body = req.body;
    try {
        const restaurantsOwner = new UserRestaurant(body);
        await restaurantsOwner.save();
        res.status(201).send(restaurantsOwner);
    } catch (error) {
        res.status(500).send(error);
    }
}

const signInRestaurantsOwner = async (req, res) => {
    const {email} = req.body;
    try {
        const existingUser = await UserRestaurant.findOne({email});
        if (!existingUser) return res.status(404).send('User does not exist');
        res.status(200).send(existingUser);
    } catch (error) {
        res.status(500).send(error);
    }
}

const updateRestaurantsOwner = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No restaurant owner with that id');
    const body = req.body;
    try {
        const restaurantsOwner = await UserRestaurant.findByIdAndUpdate(id, body, {new: true});
        res.status(200).send(restaurantsOwner);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteRestaurantsOwner = async (req, res) => {
    const {id} = req.params;
    try {
        await UserRestaurant.findByIdAndDelete(id);
        res.status(200).send('Restaurant owner deleted');
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = { getAllRestaurantsOwner, getRestaurantsOwnerById, createRestaurantsOwner, updateRestaurantsOwner, deleteRestaurantsOwner, signInRestaurantsOwner };
