const express = require('express');
const mainRouter = express.Router();
const {
getAllArticlesExpress,
createNewArticleExpress,
changeArticleTitleByIdExpress,
changeArticleAuthorByIdExpress,
deleteArticleByIdExpress,
deleteArticleByAuthorExpress,
getAllArticlesMySql,
createNewArticleMySql,
changeArticleTitleByIdMySql,
changeArticleAuthorByIdMySql,
deleteArticleByIdMySql,
deleteArticleByAuthorMySql,
deleteArticleByIdMySql1,
CreateNewUser,
Login
 } = require('../controllers/main-controller');

//Express
mainRouter.get('/articles', getAllArticlesExpress );
mainRouter.post('/articles/create',createNewArticleExpress );
mainRouter.put('/articles/:id/:newTitle', changeArticleTitleByIdExpress);
mainRouter.put('/articles/:id', changeArticleAuthorByIdExpress);
mainRouter.delete('/articles/:id', deleteArticleByIdExpress);
mainRouter.delete('/articles', deleteArticleByAuthorExpress);

//MySql
mainRouter.get('/articlesMySql', getAllArticlesMySql );
mainRouter.post('/articles/createMySql', createNewArticleMySql );
mainRouter.put('/articlesMySql/:id/:newTitle', changeArticleTitleByIdMySql );
mainRouter.put('/articlesMySql/:id', changeArticleAuthorByIdMySql );
mainRouter.delete('/articlesMySql/:id', deleteArticleByIdMySql);
mainRouter.delete('/articlesMySql1/:id', deleteArticleByIdMySql1);
mainRouter.delete('/articlesMySql', deleteArticleByAuthorMySql);

//register
mainRouter.post('/CreateNewUser',CreateNewUser)
mainRouter.post('/Login',Login)
module.exports = mainRouter;
