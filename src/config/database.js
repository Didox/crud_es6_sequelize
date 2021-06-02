require("dotenv/config");

var dbConfig = {
  dialect: "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_SCHEMA,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
};

if(process.env.NODE_ENV == "production"){
  dbConfig.dialectOptions = {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
}
module.exports = dbConfig
