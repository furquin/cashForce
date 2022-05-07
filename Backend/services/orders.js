const { orders, cnpjs, buyers, users, providers } = require('../models');

const getAllOrders = async () => {
    const allOrders = await orders.findAll({
        include: [
                { model: cnpjs, as: 'cnpj' },
                { model: users, as: 'user'},
            {
                model: buyers, as: 'buyer',
                    include: [{ model: cnpjs, as: 'cnpj' }],
                    attributes: {
                        exclude: ['cnpjId']
                    }
            },
            {
                model: providers, as: 'provider',
                include: [{ model: cnpjs, as: 'cnpj' }],
                    attributes: {
                        exclude: ['cnpjId']
                    }
            },
            ],

        attributes: {
            exclude: ['cnpjId', 'userId', 'buyerId', 'providerId' ]
        }
        
    });

    return allOrders;
};

module.exports = {
getAllOrders,   
}