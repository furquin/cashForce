module.exports = (sequelize, DataTypes) => {
  const providers = sequelize.define('providers', {
    id: { type: DataTypes.INTEGER, allowNull: false,  primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    tradingName: { type: DataTypes.STRING, defaultValue: null },
    cnpjId: { type: DataTypes.INTEGER, defaultValue: null },
        
  }, { timestamps: false });

  providers.associate = (models) => {
    
    providers.belongsTo(models.cnpjs, { foreignKey: 'cnpjId', as: 'cnpj', });
    providers.hasMany(models.orders, { as:'providers', foreignKey: 'providerId' });
  };
  

  return providers;
};