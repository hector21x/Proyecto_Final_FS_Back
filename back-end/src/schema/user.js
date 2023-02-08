'use strict';
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    identification: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, { collection: 'users' }
);

module.exports = userSchema;