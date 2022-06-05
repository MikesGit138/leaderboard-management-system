const express = require('express')
const router = express.Router();

const connection = require('../database/db')

router.get('/leaderboard', (req, res) =>{
   let sql = "SELECT * FROM leaderboard.friends"
   let query = connection.query(sql, (err, rows) =>{
       if (err) console.log('connection unsuccessful for leaderboard');
       else console.log('leaderboard query ran')
   res.render('leaderboard',{
      table: 'friends',
      friends: rows

   })
})
})

module.exports = router