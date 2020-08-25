const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(process.env.DB_CONNECTION);
const Question = require("./Question");

const Answer = sequelize.define(
  "answer",
  {
    question_id: { type: Sequelize.INTEGER },
    text: { type: Sequelize.STRING },
    media: { type: Sequelize.STRING },
    correct_answer: { type: Sequelize.BOOLEAN },
  },
  {
    underscored: true,
  }
);

Answer.belongsTo(Question, {
  foreignKey: "question_id",
  onDelete: "CASCADE",
});

Question.hasMany(Answer, {
  foreignKey: "question_id",
});

module.exports = Answer;
