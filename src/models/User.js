const Sequelize = require('sequelize');
const sequelize = require('../db.js');

const schema = 'movie';

class User extends Sequelize.Model {}
User.init({
  nome: Sequelize.STRING,
  username: Sequelize.STRING,
  email: sequelize.STRING,
  password: sequelize.STRING
}, { sequelize, modelName: 'user', schema });

sequelize.sync();
module.exports = User;
