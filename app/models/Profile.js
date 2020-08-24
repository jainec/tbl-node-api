const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(process.env.DB_CONNECTION);

const Profile = sequelize.define(
  "profile",
  {
    name: { type: Sequelize.STRING },
  },
  {
    underscored: true,
  }
);

Profile.associate = function (models) {
  Profile.hasMany(models.User, {
    foreignKey: "profile_id",
  });
};

module.exports = Profile;
