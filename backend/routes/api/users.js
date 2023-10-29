const express = require("express");
const router = express.Router();

const User = require('../../models/users.js');

//router.get('/test', (req, res) => res.send('book route testing!'))

router.get('/', (req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ nousers: 'No Users Available'}));
});

router.get('/:id', (req, res) => {
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(404).json({ nouser: 'No User Available'}));
})

router.post('/', (req, res) => {
    User.create(req.body)
    .then(user => res.json({ msg: 'User Added!'}))
    .catch(err => res.status(404).json({ error: 'Unable to add user'}));
})

router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
    .then(user => res.json({ msg: 'User updated!'}))
    .catch(err => res.status(404).json({ error: 'Unable to update'}));
})

module.exports = router;