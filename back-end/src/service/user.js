'use strict'
const modelUser = require('../model/user.js');

const crypto = require("crypto");

/**
 * Método usado para crear un estudiante"
 * @param {*HttpRequest} req
 * @param {*HttpResponse} res
 */
const saveStudentService = async (user_name, password, email) => {
    try {
        const identification = crypto.randomUUID();
        const userService= await modelUser.create({
            identification,
            user_name,
            password,
            email
        });
        return userService;
    } catch (error) {
        return "";
    };
};

/**
 * Método usado para actualizar un estudiante"
 * @param {*HttpRequest} req
 * @param {*HttpResponse} res
 */
const updateStudentService = async (identification, user_name, password, email) => {
    try {
        const result = await modelUser.updateOne(
            { identification: `${identification}` },
            {
                user_name,
                password,
                email,
            }
        );
        return result.modifiedCount;
    } catch (error) {
        return -1;
    }
};

/**
 * Método usado para eliminar un estudiante"
 * @param {*HttpRequest} req
 * @param {*HttpResponse} res
 */
const deleteStudentService = async (identification) => {
    try {
        const deleted = await modelUser.deleteOne({
            identification: `${identification}`,
        });
        return deleted.deletedCount;
    } catch (error) {
        return -1;
    }
};

/**
 * Método usado para buscar un estudiante"
 * @param {*HttpRequest} req
 * @param {*HttpResponse} res
 */
const findOneStudentService = async (identification) => {
    try {
        const student = await modelUser.find({ identification })
            .select("-_id")
            .select("-__v");
        return student;
    } catch (error) {
        return false;
    }
};

/**
 * Método usado para buscar todos los estudiantes"
 * @param {*HttpRequest} req
 * @param {*HttpResponse} res
 */
const findAllStudentService = async () => {
    try {
        const student = await modelUser.find({}).select("-_id").select("-__v");
        return student;
    } catch (error) {
        return false;
    }
};

module.exports = {
    saveStudentService,
    updateStudentService,
    deleteStudentService,
    findOneStudentService,
    findAllStudentService,
};