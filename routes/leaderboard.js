const express = require('express')
const router = express.Router();

const connection = require('../database/db')

router.get('/leaderboard', (req, res) =>{
   res.render('leaderboard')
})

module.exports = router