'use strict';
const { query } = require('express');
const faker = require('faker');
const users = [...Array(30)].map(() => ({
  username: faker.internet.userName(),
  passwordDigest: faker.internet.password(),
  email: faker.internet.exampleEmail()
}));
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', users);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users');
  }
};
