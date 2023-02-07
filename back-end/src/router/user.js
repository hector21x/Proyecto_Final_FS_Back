'use strict';
const express = require('express');
const { getUser, getUsers, createUser, updateUser, deleteUser } = require('../controller/user.js');


const router = express.Router();


router.get('/users', getUsers);

router.get('/user/:id', getUser);

router.post("/create", createUser);

router.patch('/update/:id', updateUser);

router.delete('/delete/:id', deleteUser);

module.exports = router;