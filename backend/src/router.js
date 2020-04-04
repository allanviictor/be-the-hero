// import express
const express = require('express');
// import routes
const routes = express.Router()
// import controller de Ong
const OngController = require('./controllers/OngController')
// import controller de Incident
const IncidentController = require('./controllers/IncidentController')
// import controller de Profiller
const ProfileController = require('./controllers/ProfileController')
// import controller de Session
const SessionController = require('./controllers/SessionController')

// list Ongs passando a função index dentro de controller
routes.get('/ongs', OngController.index)
// create table de Ongs passando a função create dentro de controller
routes.post('/ongs', OngController.create)

// get casos especificos de uma ong
routes.get('/profile', ProfileController.index)

// autenticando usuario na seção 
routes.post('/session', SessionController.index)


// list incidents passando a função index dentro de controller
routes.get('/incidents', IncidentController.index)
// create table de incidenst passando a função create dentro de controller
routes.post('/incidents', IncidentController.createIncidents)
// delete table de incidents passando a função delete dentro de controller
routes.delete('/incidents/:id', IncidentController.deleteIncidents)



module.exports = routes;