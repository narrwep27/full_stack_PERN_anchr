'use strict';
const { query } = require('express');
const faker = require('faker');
const { hashPassword } = require('../middleware');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await Promise.all(
      [...Array(30)].map(async () => {
        let userlogin = faker.internet.userName();
        return {
          username: userlogin,
          passwordDigest: await hashPassword(userlogin),
          email: faker.internet.exampleEmail()
        };
      })
    );
    return queryInterface.bulkInsert('users', users);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users');
  }
};
