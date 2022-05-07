const { getAllBuyers } = require('../services/buyers')

const buyers = async (_req, res, next) => {
    try {
        const allBuyers = await getAllBuyers();
        
        return res.status(200).json(allBuyers);
    } catch (e) {
        next(e);
    }
};

module.exports = buyers;