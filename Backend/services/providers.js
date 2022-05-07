const { providers, cnpjs } = require('../models');

const getAllProviders = async () => {
    const allProviders = await providers.findAll({
        include: [
            {model: cnpjs, as: 'cnpj'}
        ]
    });

    return allProviders;
};

module.exports = {
getAllProviders,   
}