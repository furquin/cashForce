const { users } = require('../models');

const getAllUsers = async () => {
    const allUsers = await users.findAll({ attributes: { exclude: ['phoneNumber', 'mobile', 'departament', 'verificationCode'] } });

    return allUsers;
};

module.exports = {
getAllUsers,   
}