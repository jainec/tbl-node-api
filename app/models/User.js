const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(process.env.DB_CONNECTION);

const User = sequelize.define(
  "user",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    underscored: true,
  }
);

User.prototype.toJSON = function () {
  const user = Object.assign({}, this.get());
  delete user.password;
  return user;
};

module.exports = User;
