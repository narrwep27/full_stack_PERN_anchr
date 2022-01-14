'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Tag, {
        foreignKey: 'user_id',
        // as: 'user',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });
      User.hasMany(models.Session, {
        foreignKey: 'user_id',
        // as: 'user',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      passwordDigest: DataTypes.STRING,
      email: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  );
  return User;
};
