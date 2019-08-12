const express = require('express');

const MovieController = require('./controllers/MovieController');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/movies', MovieController.list );
routes.get('/movies/:devId', MovieController.show );
routes.post('/movies', MovieController.create );
routes.put('/movies', MovieController.update );
routes.delete('/movies/:devId', MovieController.delete );

routes.get('/users', UserController.list );
routes.get('/users/:devId', UserController.show );
routes.post('/users', UserController.create );
routes.put('/users', UserController.update );
routes.delete('/users/:devId', UserController.delete );

module.exports = routes;