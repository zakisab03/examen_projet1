const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  const size=10;
  const page =parseInt(req.query.page || "0");
  User.find()
    .limit(size)
    .skip(size*page)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const gender = req.body.gender;
    const dob = Date.parse(req.body.dob);
    const news = req.body.news;
    const email = req.body.email;
    const photo = req.body.photo;

  const newUser = new User({
      username,
      gender,
      dob,
      news,
      email,
      photo
    });

  newUser.save()
    .then(() => res.json('User Added '))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User Deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').put((req, res) => {
  User.findById(req.params.id)
    .then(users => {
      users.username = req.body.username;
      users.gender = req.body.gender;
      users.dob = req.body.dob;
      users.news = req.body.news;
      users.email = req.body.email;
      users.photo = req.body.photo;

      users.save()
        .then(() => res.json('User Updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;