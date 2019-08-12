const Sequelize = require('sequelize');
const sequelize = new Sequelize('movies', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres'
  });

class Movie extends Sequelize.Model {}
Movie.init({
    title: Sequelize.STRING,
    poster: Sequelize.STRING,
    overview: Sequelize.TEXT
}, {sequelize, modelName: 'movie', schema: 'movie'});

module.exports = Movie;