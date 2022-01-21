'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate(models) {
      Tag.hasMany(models.Session, {
        foreignKey: 'tag_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });
      Tag.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });
    }
  }
  Tag.init(
    {
      description: DataTypes.STRING,
      color: DataTypes.STRING,
      timeSpent: DataTypes.TIME,
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Tag',
      tableName: 'tags'
    }
  );
  return Tag;
};
