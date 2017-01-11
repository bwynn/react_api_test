const path = require('path');

module.exports = (app) => {
  const userCtrl = require('../controllers/users_controller');

  // get
  app.get('/get_users', userCtrl.getUsers);

  app.post('/get_user', userCtrl.getUser);

  // post

  // put

  // delete
};
