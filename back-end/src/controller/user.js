'use strict';
const modelUser = require('../model/user.js');


const getUser = async (req, res) => {
    try {
        const allItems = await modelUser.findOne({ _id: req.params.id });
        res.status(200).send({ data: allItems })
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: 'AH OCURRIDO UN ERROR' })
    }
};


const getUsers = async (req, res) => {
    try {
        const allItems = await modelUser.find({})
        res.status(200).send({ data: allItems })

    } catch (error) {
        console.log(error)
        res.status(500).send({ error: 'AH OCURRIDO UN ERROR' })
    }
};


const createUser = async (req, res) => {
    try {
        const data= req.body
        modelUser.create(data)
        res.status(200).send({data});
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: 'AH OCURRIDO UN ERROR' })
    }
};


const updateUser = async (req, res) => {
    try {
        const userUpdate = await modelUser.findOneAndUpdate({ _id: req.params.id });
        res.status(200).send({ data: userUpdate });
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: 'AH OCURRIDO UN ERROR' })
    }
};


const deleteUser = async (req, res) => {
    try {
        const Userdelete = await modelUser.findOneAndDelete({ _id: req.params.id });
        res.status(200).send({ data: Userdelete })
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: 'AH OCURRIDO UN ERROR' })
    }
};

module.exports = { getUser, getUsers, createUser, updateUser, deleteUser };