'use strict'
const modelUser = require('../model/user.js');

const crypto = require("crypto");

/**
 * Método usado para actualizar un estudiante
 * a través de su identificación y devolver un json
 * con el mensaje student registered successfully
 * si se encuentra el estudiante ya cargado devuelve un json
 * con el mensaje "student already exists"
 * @param {*HttpRequest} req
 * @param {*HttpResponse} res
 */
const saveStudentService = async (name, password, email) => {
    try {
        const identification = crypto.randomUUID();
        const userService= await modelUser.create({
            identification,
            name,
            password,
            email
        });
        return userService;
    } catch (error) {
        return "";
    };
};

/**
 * Método usado para actualizar un estudiante
 * a través de su identificación y devolver un json
 * con el mensaje student updated successfully
 * @param {*HttpRequest} req
 * @param {*HttpResponse} res
 */
const updateStudentService = async (identification, name, password, email) => {
    try {
        const result = await modelUser.updateOne(
            { identification: `${identification}` },
            {
                name,
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
 * Método usado para eliminar un estudiante
 * a través de su identificación y devolver un json
 * con el mensaje student deleted successfully
 * si no se encuentra el estudiante devuelve un json
 * con el mensaje "student not found"
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
 * Método usado para buscar un estudiante
 * a través de su identificación y devolverlo en la
 * respuesta http por medio de un json excluyendo el _id y el __v
 * en la respuesta por medio de los métodos .select("-_id").select("-__v") línea 126
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
 * Método usado para buscar todos los estudiantes
 * registrados y devolverlos en la
 * respuesta http por medio de un json excluyendo el _id y el __v
 * en la respuesta por medio de los métodos .select("-_id").select("-__v") línea 106
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