const express = require('express');
const routes = express.Router();

const front = require('../app/controllers/FrontControllers');
// const search = require('../app/controllers/SearchController');

// const recipes = require('./recipes');
// const chefs = require('./chefs');

/* -- NAVEGAÇÃO USUÁRIO VISITANTE --*/
routes.get('/', front.index);
// routes.get('/sobre', front.sobre);
// routes.get('/recipes', front.recipes);
// routes.get('/chefs', front.chefs);
// routes.get('/recipe/:id', front.recipe);
// routes.use('/not-found', front.notFound);

/* ----------- PESQUISA ----------- */
// routes.get('/busca', search.index);

/* ----- ROTAS ADMINISTRATIVAS -----*/
// routes.use('/admin/recipes', recipes);
// routes.use('/admin/chefs', chefs);
// routes.use('/admin/users', profile);
// routes.use('/admin/users', users);

module.exports = routes;