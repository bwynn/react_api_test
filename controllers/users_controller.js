const Users = require('../models/users_model');

exports.getUsers = (req, res) => {
  Users.find().then((err, users) => {
    if (err) res.send(err);

    res.json(users);
  });
};

exports.getUser = (req, res) => {
  console.log(req.body);
  Users.findOne({ name: req.body.data.name }, (err, user) => {
    if (err) res.send(err);

    res.json(user);
  });
};
