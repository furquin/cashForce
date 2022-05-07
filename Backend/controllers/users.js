const { getAllUsers } = require('../services/users')

const users = async (_req, res, next) => {
    try {
        const allUsers = await getAllUsers();
        
        return res.status(200).json(allUsers);
    } catch (e) {
        next(e);
    }
};

module.exports = users;