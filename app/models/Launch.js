const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(process.env.DB_CONNECTION);
const Room = require("./Room");
const Quiz = require("./Quiz");

const Launch = sequelize.define(
  "launch",
  {
    room_id: { type: Sequelize.INTEGER },
    quiz_id: { type: Sequelize.INTEGER },
  },
  {
    underscored: true,
  }
);

Launch.belongsTo(Room, {
  foreignKey: "room_id",
});

Room.hasMany(Launch, {
  foreignKey: "room_id",
});

Launch.belongsTo(Quiz, {
  foreignKey: "quiz_id",
});

Quiz.hasMany(Launch, {
  foreignKey: "quiz_id",
});

module.exports = Launch;
