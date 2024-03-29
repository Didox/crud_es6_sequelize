require("dotenv/config");

import Sequelize from "sequelize";

import User from "../app/models/Cliente";

import databaseconfig from "../config/database";

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseconfig);
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
