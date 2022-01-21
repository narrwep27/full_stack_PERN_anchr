'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Session extends Model {
    static associate(models) {
      Session.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });
      Session.belongsTo(models.Tag, {
        foreignKey: 'tag_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });
    }
  }
  Session.init(
    {
      timeSpent: DataTypes.INTEGER,
      tagId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'tag_id',
        onDelete: 'CASCADE',
        references: {
          model: 'tags',
          key: 'id'
        }
      },
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
      modelName: 'Session',
      tableName: 'sessions'
    }
  );
  return Session;
};
