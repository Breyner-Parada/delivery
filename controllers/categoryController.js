const {Category} = require('../models/category');
const mongoose = require('mongoose');

const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).send(categories);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getCategoryById = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No category with that id');
    try {
        const category = await Category.findById(id);
        res.status(200).send(category);
    } catch (error) {
        res.status(500).send(error);
    }
}

const createCategory = async (req, res) => {
    const category = new Category(req.body);
    try {
        await category.save();
        res.status(201).send(category);
    } catch (error) {
        res.status(500).send(error);
    }
}

const updateCategory = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No category with that id');
    const body = req.body;
    try {
        const category = await Category.findByIdAndUpdate(id, body, {new: true});
        res.status(200).send(category);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteCategory = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No category with that id');
    try {
        const category = await Category.findByIdAndDelete(id);
        res.status(200).send(category);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = { getCategories, getCategoryById, createCategory, updateCategory, deleteCategory };
