'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tag.hasMany(models.Session, {
        foreignKey: 'tag_id',
        as: 'tag',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });
      Tag.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });
      // define association here
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
          model: 'user',
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
