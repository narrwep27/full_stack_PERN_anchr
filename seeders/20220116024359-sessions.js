'use strict';
const { Tag, sequelize } = require('../models');
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const sessions = await Promise.all(
      [...Array(60)].map(async () => {
        let tag = await Tag.findOne({
          order: sequelize.random(),
          raw: true
        });
        return {
          timeSpent: faker.datatype.number({
            min: 10,
            max: 50
          }),
          user_id: tag.user_id,
          tag_id: tag.id
        };
      })
    );
    return queryInterface.bulkInsert('sessions', sessions);
  },

  down: async (queryInterface, Sequelize) => {
    // return queryInterface.bulkDelete('sessions');
  }
};
