module.exports = (sequelize, DataTypes) => {
  const buyers = sequelize.define('buyers', {
    id: { type: DataTypes.INTEGER, allowNull: false,  primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    tradingName: { type: DataTypes.STRING, defaultValue: null },
    cnpjId: { type: DataTypes.INTEGER, defaultValue: null },
    confirm: { type: DataTypes.BOOLEAN, defaultValue: 1}
        
  }, { timestamps: false });

  buyers.associate = (models) => {
    buyers.belongsTo(models.cnpjs,{foreignKey: 'cnpjId', as: 'cnpj'});
    buyers.hasMany(models.orders, { as:'order', foreignKey: 'buyerId' });
    
  };

  return buyers;
};