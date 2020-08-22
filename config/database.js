require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  dialect: process.env.DB_DIALECT || "mysql",
  logging: false,
  storage: "./tests/database.sqlite",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
