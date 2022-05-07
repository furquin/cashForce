const { buyers, cnpjs } = require('../models');

const getAllBuyers = async () => {
    const allBuyers = await buyers.findAll({
        include: [
            {model:cnpjs, as: 'cnpj'}
        ]
    });

    return allBuyers;
};

module.exports = {
getAllBuyers,   
}