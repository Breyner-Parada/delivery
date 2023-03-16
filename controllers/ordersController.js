const { Orders } = require('../models/orders');
const mongoose = require('mongoose');

const getOrders = async (req, res) => {
    try {
        const getAllOrders = await Orders.find();
        res.status(200).send(getAllOrders);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getOrdersByUser = async (req, res) => {
    const {userSub} = req.query;
    try {
        const orders = await Orders.find({'createdBy.id': userSub})
        res.status(200).send(orders);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getOrdersById = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No order with that id');
    try {
        const order = await Orders.findById(id).populate('createdBy');
        res.status(200).send(order);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getOrdersByRestaurant = async (req, res) => {
    const { orderState} = req.query;
    try {
        const orders = await Orders.find({state: orderState})
        res.status(200).send(orders);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getOrdersByRestaurantId = async (req, res) => {
    const {restaurantId} = req.query;
    try {
        const orders = await Orders.find({restaurantId})
        res.status(200).send(orders);
    } catch (error) {
        res.status(500).send(error);
    }
}

const createOrder = async (req, res) => {
    const order = new Orders(req.body);
    try {
        await order.save();
        res.status(201).send({
            message: 'Order created',
            order
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

const updateOrder = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No order with that id');
    const body = req.body;
    try {
        const order = await Orders.findByIdAndUpdate(id, body, {new: true});
        res.status(200).send(order);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteOrder = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No order with that id');
    try {
        await Orders.findByIdAndDelete(id);
        res.status(200).send({message: 'Order deleted', id});
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = { getOrders, getOrdersByUser, getOrdersById, createOrder, updateOrder, deleteOrder, getOrdersByRestaurant, getOrdersByRestaurantId };