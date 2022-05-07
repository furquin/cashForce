module.exports = (sequelize, DataTypes) => {
  const cnpjs = sequelize.define('cnpjs', {
    id: { type: DataTypes.INTEGER, allowNull: false,  primaryKey: true },
    cnpj: { type: DataTypes.STRING, allowNull: false, unique: true },
    companyType: { type: DataTypes.STRING, allowNull: false },
        
  }, { timestamps: false });

    cnpjs.associate = (models) => {
      cnpjs.hasMany(models.buyers, { as: 'buyer', foreignKey: 'cnpjId' });
      cnpjs.hasMany(models.providers, { as: 'provider', foreignKey: 'cnpjId' });
      cnpjs.hasMany(models.orders, { as:'order', foreignKey: 'cnpjId' });     
    };


  return cnpjs;
};