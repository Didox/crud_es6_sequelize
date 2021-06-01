require("dotenv/config");

module.exports = {
  dialect: "postgres",
  // dialectOptions: {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_USER,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
  // },
};