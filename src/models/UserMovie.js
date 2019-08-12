const Sequelize = require('sequelize');
const sequelize = require('../db.js');

const schema = 'movie';

class UserMovie extends Sequelize.Model {}
UserMovie.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  movieId: {
    type: Sequelize.INTEGER,
  },
  userId: {
    type: Sequelize.INTEGER
  }
}, { sequelize, modelName: 'user_movie', schema });