const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const gender = req.body.gendar;
  const dob = req.body.dob;
  const news = req.body.news;
  const email = req.body.email;
  const photo = req.body.photo;


  const newUser = new User({username,gender,dob,news,email,photo});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('user deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route ('/:id').put ((req, res) => { 
  User.findById (req.params.id) 
    .then (users => { 
      users.username = req.body.username; 
      users.gendar = req.body.gendar; 
      users.dob = Date .parse (req.body.dob);
      users.news =   req.body.news;
      users.email =  req.body.email;
      users.photo =  req.body.photo;

      users.save () 
        .then (() => res.json ('user update')) 
        .catch (err => res.status (400) .json ('Erreur:' + err)); 
    }) 
    .catch (err => res.status (400) .json ('Erreur:' + err)); 
});


module.exports = router;