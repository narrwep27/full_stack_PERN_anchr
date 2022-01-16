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
        let refDate = faker.date.past(1);
        let newDate;
        return {
          startTime: faker.random.word(),
          endTime: faker.commerce.color(),
          userId: tag.userId,
          tagId: tag.id
        };
      })
    );
    return queryInterface.bulkInsert('sessions', sessions);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.blulkDelete('sessions');
  }
};
