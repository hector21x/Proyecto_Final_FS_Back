'use strict'
const User = require("../model/userModel.js");

const crypto = require("crypto");

/**
 * Método usado para crear un usuario"
 * @param {*HttpRequest} req
 * @param {*HttpResponse} res
 */
const registerService = async (user_name, password, email) => {
    try {
        const id = crypto.randomUUID();
        await User.create({
            id,
            user_name,
            password,
            email
        });
        return id;
    } catch (error) {
        return error;
    };
};

const loginService = async (email, pass) => {
    try {
        const user = await User.findOne({ email: email }).select("-_id").select("-id");
        if (user.password === pass) {
            return user.user_name;
        } else {
            return "";
        }
    } catch (error) {
        return "";
    }
}

module.exports = { registerService, loginService};