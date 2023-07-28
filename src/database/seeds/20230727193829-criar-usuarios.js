const bcryptjs = require('bcryptjs');
const { faker } = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const dummyJSON = [];
    for (let i = 0; i < 10; i += 1) {
      dummyJSON.push({
        nome: faker.person.firstName(),
        email: faker.internet.email(),
        password_hash: await bcryptjs.hash(faker.internet.password(), 8),
        created_at: new Date(),
        updated_at: new Date(),
      });
    }
    await queryInterface.bulkInsert('users', dummyJSON, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
