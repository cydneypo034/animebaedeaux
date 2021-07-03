import express from "express";
const router = express.Router();

const User = require('../../models/users');

router.get('/test', (req, res) => res.send('book route testing!'))

module.exports = router;