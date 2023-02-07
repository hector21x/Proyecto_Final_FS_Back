const modelUser = require('../model/user.js');

const crypto = require("crypto");


const saveStudentService = async (name, password, email) => {
    try {
        const _id = crypto.randomUUID();
        await modelUser.create({
            _id,
            name,
            password,
            email,
        });
        return _id;
    } catch (error) {
        return "";
    }
};

const updateStudentService = async (_id, name, password, email) => {
    try {
        const result = await modelUser.updateOne(
            { _id: `${_id}` },
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


const deleteStudentService = async (_id) => {
    try {
        const deleted = await modelUser.deleteOne({
            _id: `${_id}`,
        });
        return deleted.deletedCount;
    } catch (error) {
        return -1;
    }
};


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