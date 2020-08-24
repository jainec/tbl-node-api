const { Sequelize, DataTypes } = require("sequelize");
const User = require("./User");
const sequelize = new Sequelize(process.env.DB_CONNECTION);

const Room = sequelize.define(
  "room",
  {
    creator_id: { type: Sequelize.INTEGER },
    name: { type: Sequelize.STRING },
    pin: { type: Sequelize.STRING },
    status: { type: Sequelize.STRING },
  },
  {
    underscored: true,
  }
);

Room.belongsTo(User, {
  foreignKey: "creator_id",
  as: "creator",
});

User.hasMany(Room, {
  foreignKey: "creator_id",
  as: "creator",
});

module.exports = Room;
