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
CreateNewUser,
Login,
searchData,
weatherdata,
contact,
DataArticles
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
mainRouter.put('/articlesMySqlUpdata/:id', changeArticleAuthorByIdMySql );
mainRouter.delete('/articlesMySqlDelete/:id', deleteArticleByIdMySql);
mainRouter.delete('/articlesMySql', deleteArticleByAuthorMySql);

//register
mainRouter.post('/CreateNewUser',CreateNewUser)
mainRouter.post('/Login',Login)
mainRouter.get('/searchData',searchData)
mainRouter.get('/weather',weatherdata)
mainRouter.get('/contact',contact)
mainRouter.get('/DataArticles/:id',DataArticles)
module.exports = mainRouter;
