const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(process.env.DB_CONNECTION);
const User = require("./User");
const QuestionType = require("./QuestionType");
const Quiz = require("./Quiz");

const Question = sequelize.define(
  "question",
  {
    creator_id: { type: Sequelize.INTEGER },
    question_type_id: { type: Sequelize.INTEGER },
    title: { type: Sequelize.STRING },
    media: { type: Sequelize.STRING },
    explanation: { type: Sequelize.STRING },
    media_explanation: { type: Sequelize.STRING },
  },
  {
    underscored: true,
  }
);

Question.belongsTo(User, {
  foreignKey: "creator_id",
  as: "question_creator",
});

User.hasMany(Question, {
  foreignKey: "creator_id",
  as: "question_creator",
});

Question.belongsTo(QuestionType, {
  foreignKey: "question_type_id",
  as: "question_type",
});

QuestionType.hasMany(Question, {
  foreignKey: "question_type_id",
  as: "question_type",
});

Question.belongsTo(Quiz, {
  foreignKey: "quiz_id",
  onDelete: "CASCADE",
});

Quiz.hasMany(Question, {
  foreignKey: "quiz_id",
});

module.exports = Question;
