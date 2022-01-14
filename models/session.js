'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Session extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Session.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });
      Session.belongsTo(models.Tag, {
        foreignKey: 'tag_id',
        as: 'tag',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });
      // define association here
    }
  }
  Session.init(
    {
      startTime: DataTypes.DATE,
      endTime: DataTypes.DATE,
      timeSpent: DataTypes.TIME,
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
          model: 'user',
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
