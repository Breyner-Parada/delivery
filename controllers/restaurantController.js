const mongoose = require('mongoose');
const {Restaurant} = require('../models/restaurant');

const getRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.status(200).send(restaurants);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getRestaurantById = async (req, res) => {
    const {id} = req.params;
    try {
        const restaurant = await Restaurant.findById(id).populate('categories').populate('dishes').populate('createdBy');
        res.status(200).send(restaurant);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getRestaurantBySearch = async (req, res) => {
    const {searchQuery} = req.query;
    try {
        const restaurant = await Restaurant.find({restaurantName: {$regex: searchQuery, $options: 'i'}}).populate('dishes');
        res.status(200).send(restaurant);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getRestaurantByUserId = async (req, res) => {
    const {userId} = req.query;
    try {
        const restaurant = await Restaurant.findOne({createdBy: userId}).populate('dishes');
        res.status(200).send(restaurant);
    } catch (error) {
        res.status(500).send(error);
    }
}

const createRestaurant = async (req, res) => {
    const restaurant = new Restaurant(req.body);
    try {
        await restaurant.save();
        res.status(201).send(restaurant);
    } catch (error) {
        res.status(500).send(error);
    }
}

const updateRestaurant = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No restaurant with that id');
    const body = req.body;
    try {
        const restaurant = await Restaurant.findByIdAndUpdate(id, body, {new: true});
        res.status(200).send(restaurant);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteRestaurant = async (req, res) => {
    const {id} = req.params;
    try {
        await Restaurant.findByIdAndDelete(id);
        res.status(200).send('Restaurant deleted');
    } catch (error) {
        res.status(500).send(error);
    }
}


module.exports = { getRestaurants, getRestaurantById, createRestaurant, updateRestaurant, deleteRestaurant, getRestaurantBySearch, getRestaurantByUserId };