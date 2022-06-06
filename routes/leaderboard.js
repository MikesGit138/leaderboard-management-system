const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

const connection = require('../database/db')

router.get('/leaderboard', (req, res) =>{
   let sql = "SELECT * FROM leaderboard.friends"
   let sql2 = 'SELECT COUNT(id) AS friendCount FROM friends'
   let query = connection.query(sql, (err, rows) =>{
      let countQuery = connection.query(sql2, (err, count) =>{
         res.render('leaderboard',{
            table: 'Friends',
            friends: rows,
            count : count[0].friendCount 
         })
      })
      //  if (err) console.log('connection unsuccessful for leaderboard');
      //  else console.log('leaderboard query ran')
})
})



module.exports = router