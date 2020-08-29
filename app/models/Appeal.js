const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(process.env.DB_CONNECTION);
const Team = require("./Team");
const Question = require("./Question");
const Answer = require("./Answer");

const Appeal = sequelize.define(
  "appeal",
  {
    team_id: { type: Sequelize.INTEGER },
    question_id: { type: Sequelize.INTEGER },
    answer_id: { type: Sequelize.INTEGER },
    ambiguity_problem: { type: Sequelize.BOOLEAN },
    content_problem: { type: Sequelize.BOOLEAN },
    description: { type: Sequelize.TEXT },
  },
  {
    underscored: true,
  }
);

Appeal.belongsTo(Team, {
  foreignKey: "team_id",
});

Team.hasMany(Appeal, {
  foreignKey: "team_id",
});

Appeal.belongsTo(Question, {
  foreignKey: "question_id",
});

Question.hasMany(Appeal, {
  foreignKey: "question_id",
});

Appeal.belongsTo(Answer, {
  foreignKey: "answer_id",
});

Answer.hasMany(Appeal, {
  foreignKey: "answer_id",
});

module.exports = Appeal;
