"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("quizzes", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      owner_id: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: {
            tableName: "users",
          },
          key: "id",
        },
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
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
    return await queryInterface.dropTable("quizzes");
  },
};
