const express = require('express');
const ONGcontroller = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const SessionController = require('./controllers/SessionController');
const ProfileController = require('./controllers/ProfileController');
const routes = express.Router();

routes.get('/ongs', ONGcontroller.index);
routes.post('/ongs', ONGcontroller.create);

routes.get('/profile', ProfileController.index);

routes.post('/session', SessionController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete)
module.exports = routes;