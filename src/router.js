const express = require('express');

const MovieController = require('./controllers/MovieController');

// cria obj para rotas
const routes = express.Router();

//rotas GET, POST, PUT e DELETE
routes.get('/movies', MovieController.list );
routes.post('/movies', MovieController.list );
routes.post('/movies/:devId/likes', MovieController.list );

module.exports = routes;