const { getAllOrders } = require('../services/orders')

const orders = async (_req, res, next) => {
    try {
        const allOrders = await getAllOrders();
        
        return res.status(200).json(allOrders);
    } catch (e) {
        next(e);
    }
};

module.exports = orders;