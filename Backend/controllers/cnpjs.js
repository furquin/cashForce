const { getAllCnpjs } = require('../services/cnpjs')

const cnpjs = async (_req, res, next) => {
    try {
        const allCnpjs = await getAllCnpjs();
        
        return res.status(200).json(allCnpjs);
    } catch (e) {
        next(e);
    }
};

module.exports = cnpjs;