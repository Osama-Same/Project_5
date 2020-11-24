const express = require('express');
const mainRouter = express.Router();
const {getAllUsers,deleteFirstUser,getUserName} = require('../controllers/main-controller');

mainRouter.get('/users', getAllUsers);

mainRouter.delete('/users/first',deleteFirstUser)

mainRouter.get('/users/name/:userIndex', getUserName);

// Yes > 70%       
// Go faster   < 70 %    && > 40%
// No  < 40%

/* 
// FROM HERE JUST FOR REVIEW
const sum = (req, res) => {
  console.log('REQ:', req.method);
  res.json(`hurrah => ${req.method}`);
};

// server url + router url + endpoint path
// http://localhost:5000 + none + /test
mainRouter.get('/test', sum);
mainRouter.post('/test', sum);
mainRouter.put('/test', (req, res) => {
  console.log('REQ:', req.method);
  res.json(`hurrah => ${req.method}`);
});
// TILL HERE JUST FOR REVIEW
 */


module.exports = mainRouter;
