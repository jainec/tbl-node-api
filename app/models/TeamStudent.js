const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(process.env.DB_CONNECTION);
const Team = require("./Team");
const User = require("./User");

const TeamStudent = sequelize.define(
  "team_student",
  {
    team_id: { type: Sequelize.INTEGER },
    student_id: { type: Sequelize.INTEGER },
    leader: { type: Sequelize.BOOLEAN },
  },
  {
    underscored: true,
  }
);

TeamStudent.belongsTo(Team, {
  foreignKey: "team_id",
});

Team.belongsToMany(User, {
  foreignKey: "student_id",
  through: "team_students",
});

TeamStudent.belongsTo(User, {
  foreignKey: "student_id",
});

User.belongsToMany(Team, {
  foreignKey: "team_id",
  through: "team_students",
});

module.exports = TeamStudent;
