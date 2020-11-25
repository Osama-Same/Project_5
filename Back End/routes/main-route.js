const express = require('express');
const mainRouter = express.Router();
const {
getAllArticles,
createNewArticle,
changeArticleTitleById,
changeArticleAuthorById,
deleteArticleById,
deleteArticleByAuthor,
getAllArticlesMySql,
createNewArticleMySql,
changeArticleTitleByIdMySql,
changeArticleAuthorByIdMySql,
deleteArticleByIdMySql,
deleteArticleByAuthorMySql
 } = require('../controllers/main-controller');

//Express
mainRouter.get('/articles', getAllArticles );
mainRouter.post('/articles/create',createNewArticle );
mainRouter.put('/articles/:id/:newTitle', changeArticleTitleById);
mainRouter.put('/articles/:id', changeArticleAuthorById);
mainRouter.delete('/articles/:id', deleteArticleById);
mainRouter.delete('/articles', deleteArticleByAuthor);

//MySql
mainRouter.get('/articlesMySql', getAllArticlesMySql );
mainRouter.post('/articles/createMySql', createNewArticleMySql );
mainRouter.put('/articlesMySql/:id/:newTitle', changeArticleTitleByIdMySql );
mainRouter.put('/articlesMySql/:id', changeArticleAuthorByIdMySql );
mainRouter.delete('/articlesMySql/:id', deleteArticleByIdMySql);
mainRouter.delete('/articlesMySql', deleteArticleByAuthorMySql);
module.exports = mainRouter;
