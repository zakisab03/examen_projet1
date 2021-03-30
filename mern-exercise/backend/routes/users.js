const router = require('express').Router();
let user = require('../models/user.model');

router.route('/').get((req, res) => {
  user.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  user.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const gender = req.body.gender;
  const dob = req.body.dob;
  const news = req.body.news;
  const email = req.body.email;
  const photo = req.body.photo;


  const newUser = new user({username,gender,dob,news,email,photo});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  user.findByIdAndDelete(req.params.id)
    .then(() => res.json('user deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route ('/:id').put ((req, res) => { 
  user.findById (req.params.id) 
    .then (users => { 
      users.username = req.body.username; 
      users.gender = req.body.gender; 
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