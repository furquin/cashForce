const { cnpjs } = require('../models');

const getAllCnpjs= async () => {
    const allCnpjs = await cnpjs.findAll();

    return allCnpjs;
};

module.exports = {
getAllCnpjs,   
}