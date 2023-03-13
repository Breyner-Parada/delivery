const {User} = require('../models/users');
const mongoose = require('mongoose');

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getUserById = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No user with that id');
    try {
        const user = await User.findById(id);
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
}

const createUser = async (req, res) => {
    const body = req.body;
    try {
        const existingUser = await User.findOne({email: body.email});
        if (existingUser) return res.status(400).send('User already exists');
        const user = new User(body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
}

const signinUser = async (req, res) => {
    const {email} = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
          return res.status(404).json({ Message: "User doesn't exist." });
        }
    
        res.status(200).json(existingUser);
      } catch (error) {
        res.status(500).json({ Message: "Something went wrong" });
      }
    };

const updateUser = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No user with that id');
    const body = req.body;
    try {
        const user = await User.findByIdAndUpdate(id, body, {new: true});
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteUser = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No user with that id');
    try {
        const user = await User.findByIdAndDelete(id);
        res.status(200).send("User deleted successfully");
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = { getUsers, getUserById, createUser, signinUser, updateUser, deleteUser };