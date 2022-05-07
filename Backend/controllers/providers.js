const { getAllProviders } = require('../services/providers')

const providers = async (_req, res, next) => {
    try {
        const allProviders = await getAllProviders();
        
        return res.status(200).json(allProviders);
    } catch (e) {
        next(e);
    }
};

module.exports = providers;