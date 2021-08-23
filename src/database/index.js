const Sequelize = require("sequelize");
const dbconfig = require("../config/database")

const Post = require("../models/Post")

const connection = new Sequelize(dbconfig.url, dbconfig.config);

Post.init(connection);

module.exports = connection;
