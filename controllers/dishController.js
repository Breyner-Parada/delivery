const {Dish} = require('../models/dish');
const mongoose = require('mongoose');

const getDishes = async (req, res) => {
    try {
        const getAllDishes = await Dish.find();
        res.status(200).send(getAllDishes);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getDishesByUser = async (req, res) => {
    const {userSub} = req.query;
    try {
        const dishes = await Dish.find({createdBy: userSub}).populate('createdBy');
        res.status(200).send(dishes);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getDishById = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No dish with that id');
    try {
        const dish = await Dish.findById(id).populate('createdBy');
        res.status(200).send(dish);
    } catch (error) {
        res.status(500).send(error);
    }
}

const createDish = async (req, res) => {
    const dish = new Dish(req.body);
    try {
        await dish.save();
        res.status(201).send({
            message: 'Dish created',
            dish
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

const updateDish = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No dish with that id');
    const body = req.body;
    try {
        const dish = await Dish.findByIdAndUpdate(id, body, {new: true});
        res.status(200).send(dish);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteDish = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No dish with that id');
    try {
        await Dish.findByIdAndDelete(id);
        res.status(200).send({message: 'Dish deleted', id});
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = { getDishes, getDishById, createDish, updateDish, deleteDish, getDishesByUser };