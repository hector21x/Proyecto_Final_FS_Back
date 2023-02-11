'use strict';
const express = require('express');
const { getUser, getUsers, createUser, updateUser, deleteUser } = require('../controller/user.js');


const router = express.Router();


router.get('/getUsers', getUsers);

router.get('/getUser/:identification', getUser);
router.post("/create", createUser);

router.patch('/update/:identification', updateUser);

router.delete('/delete/:identification', deleteUser);

module.exports = router;