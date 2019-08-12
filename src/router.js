const express = require('express');

const MovieController = require('./controllers/MovieController');

const routes = express.Router();

routes.get('/movies', MovieController.list );
routes.get('/movies/:devId', MovieController.show );
routes.post('/movies', MovieController.create );
routes.put('/movies', MovieController.update );
routes.delete('/movies/:devId', MovieController.delete );

module.exports = routes;