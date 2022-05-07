module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    id: { type: DataTypes.INTEGER, allowNull: false,  primaryKey: true },
    emissionDate: { type: DataTypes.DATE, allowNull: false, defaultValue: null},
    nNf: { type: DataTypes.STRING, defaultValue: null },
    value: { type: DataTypes.STRING, defaultValue: null },
    cnpjId: { type: DataTypes.INTEGER, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false},
    buyerId: { type: DataTypes.INTEGER, allowNull: false},
    providerId: { type: DataTypes.INTEGER, allowNull: false },
    orderStatusBuyer: { type: DataTypes.INTEGER, allowNull: false},
    
        
  }, { timestamps: false });

  orders.associate = (models) => {
    
    orders.belongsTo(models.cnpjs, { foreignKey: 'cnpjId', as: 'cnpj' });
    orders.belongsTo(models.buyers, { foreignKey: 'buyerId', as: 'buyer' });
    orders.belongsTo(models.providers, { foreignKey: 'providerId', as: 'provider' });
    orders.belongsTo(models.users,{foreignKey: 'userId',as: 'user', });
    
  };
   


  return orders;
};