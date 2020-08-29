const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(process.env.DB_CONNECTION);
const User = require("../models/User");

const Quiz = sequelize.define(
  "quiz",
  {
    title: DataTypes.STRING,
    owner_id: DataTypes.INTEGER,
  },
  {
    underscored: true,
  }
);

Quiz.belongsTo(User, {
  foreignKey: "owner_id",
  as: "owner",
  onDelete: "CASCADE",
});

User.hasMany(Quiz, {
  foreignKey: "owner_id",
  as: "owner",
});

module.exports = Quiz;
