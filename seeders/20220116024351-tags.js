'use strict';
const { User, sequelize } = require('../models');
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const tags = await Promise.all(
      [...Array(60)].map(async () => {
        let user = await User.findOne({
          order: sequelize.random(),
          raw: true
        });
        return {
          description: faker.random.word(),
          color: faker.commerce.color(),
          user_id: user.id
        };
      })
    );
    return queryInterface.bulkInsert('tags', tags);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tags');
  }
};
