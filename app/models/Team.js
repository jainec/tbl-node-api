const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(process.env.DB_CONNECTION);
const LAT = require("./Launch");
const Launch = require("./Launch");

const Team = sequelize.define(
  "team",
  {
    launch_id: { type: Sequelize.INTEGER },
    name: { type: Sequelize.STRING },
    size: { type: Sequelize.INTEGER },
  },
  {
    underscored: true,
  }
);

Team.belongsTo(Launch, {
  foreignKey: "launch_id",
});

Launch.hasMany(Team, {
  foreignKey: "launch_id",
});

module.exports = Team;
