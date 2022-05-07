module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
        id: { type: DataTypes.INTEGER, allowNull: false,  primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, unique: true },
        emailChecked: { type: DataTypes.BOOLEAN, defaultValue: 0 },
        cashforceAdm: { type: DataTypes.BOOLEAN, defaultValue: 0 },
  }, { timestamps: false });

  users.associate = (models) => {
  users.hasMany(models.orders, { as:'user', foreignKey: 'userId' });
  };

  return users;
};