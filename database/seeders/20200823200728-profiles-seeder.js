"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("profiles", [
      {
        name: "Professor",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Aluno",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("profiles", null, {});
  },
};
