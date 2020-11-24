const express = require('express');
const mainRouter = express.Router();
const {getAllArticles} = require('../controllers/main-controller');

mainRouter.get('/articles', getAllArticles);

module.exports = mainRouter;
