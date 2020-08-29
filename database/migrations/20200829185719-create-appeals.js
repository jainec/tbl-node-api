"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("appeals", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      team_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      question_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ambiguity_problem: {
        type: Sequelize.BOOLEAN,
      },
      content_problem: {
        type: Sequelize.BOOLEAN,
      },
      description: {
        type: Sequelize.TEXT,
      },
      answer_id: {
        type: Sequelize.INTEGER,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable("appeals");
  },
};
