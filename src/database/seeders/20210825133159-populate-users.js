'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id: "1",
      name: 'John',
      email: 'example@example.com',
      password: '123456',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: "2",
      name: 'Joao',
      email: 'example2@example.com',
      password: '123456',
      created_at: new Date(),
      updated_at: new Date()
    } ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
