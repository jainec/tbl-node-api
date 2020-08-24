const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(process.env.DB_CONNECTION);

const QuestionType = sequelize.define(
  "question_type",
  {
    name: { type: Sequelize.STRING },
  },
  {
    underscored: true,
  }
);

module.exports = QuestionType;
