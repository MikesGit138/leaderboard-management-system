const express = require('express')
const router = express.Router();

const connection = require('../database/db')

router.get('/', (req, res) =>{
   res.send('home route works')
})

module.exports = router