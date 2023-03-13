const { UserDriver } = require('../models/userDriver');
const mongoose = require('mongoose');

const getUserDrivers = async (req, res) => {
    try {
        const users = await UserDriver.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getUserDriverById = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No user with that id');
    try {
        const user = await UserDriver.findById(id);
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
}

const createUserDriver = async (req, res) => {
    const body = req.body;
    try {
        const existingUser = await UserDriver.findOne({email: body.email});
        if (existingUser) return res.status(400).send('User already exists');
        const user = new UserDriver(body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
}

const signinUserDriver = async (req, res) => {
    const {phone_number} = req.body;
    try {
        const existingUser = await UserDriver.findOne({ phone_number });
        if (!existingUser) {
          return res.status(404).json({ Message: "User doesn't exist." });
        }
    
        res.status(200).json(existingUser);
      } catch (error) {
        res.status(500).json({ Message: "Something went wrong" });
      }
    };

const updateUserDriver = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No user with that id');
    const body = req.body;
    try {
        const user = await UserDriver.findByIdAndUpdate(id, body, {new: true});
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteUserDriver = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No user with that id');
    try {
        const user = await UserDriver.findByIdAndDelete(id);
        res.status(200).send("User deleted successfully");
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {getUserDrivers, getUserDriverById, createUserDriver, signinUserDriver, updateUserDriver, deleteUserDriver};