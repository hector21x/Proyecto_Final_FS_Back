'use strict';
const {
    saveStudentService,
    updateStudentService,
    deleteStudentService,
    findOneStudentService,
    findAllStudentService,
} = require('../service/user')


const getUser = async (req, res) => {
    const identification = req.params._id;
    const response = await findOneStudentService(identification);
    if (response.length > 0) {
        res.json({ response });
    } else {
        res.status(204).send();
    }
};


const getUsers = async (req, res) => {
    const response = await findAllStudentService();
    if (response.length > 0) {
        res.json({ students: response });
    } else {
        res.status(204);
    }
};


const createUser = async (req, res) => {
    const { name, password, email } = req.body;
    const response = await saveStudentService(name, password, email);
    if (response !== "") {
        res.json({ identification: response });
    } else {
        res.status(400).json({ error: "error when creating student" });
    }
};


const updateUser = async (req, res) => {
    const { name, password, email } = req.body;
    const _id = req.params._id;
    const response = await updateStudentService(_id, name, password, email);
    if (response > 0) {
        res.json({ message: "student updated successfully" });
    } else {
        res.status(400).json({ error: "error when updating student" });
    }
};


const deleteUser = async (req, res) => {
    const _id = req.params._id;
    const response = await deleteStudentService(_id);
    if (response > 0) {
        res.json({ message: "student deleted successfully" });
        res.status(200);
    } else {
        res.status(404).json({ message: "student not found" });
    }
};

module.exports = { getUser, getUsers, createUser, updateUser, deleteUser };