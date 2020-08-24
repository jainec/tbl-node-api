"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("question_types", [
      {
        name: "Multiple choice",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "True or false",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Short answer",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("question_types", null, {});
  },
};
